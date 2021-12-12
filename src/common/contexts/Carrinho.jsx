import { createContext, useContext, useState } from "react";

export const CarrinhoContext = createContext({});
CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [quantidadeProdutos, setQuantidadeProdutos] = useState(0);

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        setCarrinho,
        quantidadeProdutos,
        setQuantidadeProdutos,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinhoContext = () => {
  const { carrinho, setCarrinho, quantidadeProdutos, setQuantidadeProdutos } =
    useContext(CarrinhoContext);

  const mudarQuantidade = (id, quantidade) => {
    return carrinho.map((item) => {
      if (item.id === id) item.quantidade += quantidade;
      return item;
    });
  };

  const adicionarProduto = (novoProduto) => {
    const temOProduto = carrinho.some(
      (itemDoCarrinho) => itemDoCarrinho.id === novoProduto.id
    );

    if (!temOProduto) {
      novoProduto.quantidade = 1;
      return setCarrinho((oldCarrinho) => [...oldCarrinho, novoProduto]);
    }

    // setCarrinho((oldCarrinho) =>
    //   oldCarrinho.map((item) => {
    //     if (item.id === novoProduto.id) item.quantidade += 1;
    //     return item;
    //   })
    // );

    setCarrinho(mudarQuantidade(novoProduto.id, 1));
  };

  const removerProduto = (id) => {
    const produto = carrinho.find((itemDoCarrinho) => itemDoCarrinho.id === id);
    const ultimo = produto.quantidade === 1;

    if (ultimo) {
      return setCarrinho((carrinhoAnterior) =>
        carrinhoAnterior.filter((itemDoCarrinho) => itemDoCarrinho.id !== id)
      );
    }

    // setCarrinho((carrinhoAnterior) =>
    //   carrinhoAnterior.map((itemDoCarrinho) => {
    //     if (itemDoCarrinho.id !== id) itemDoCarrinho.quantidade -= 1;
    //     return itemDoCarrinho;
    //   })
    // );

    setCarrinho(mudarQuantidade(id, -1));
  };

  useEffect(() => {
    const novaQuantidade = carrinho.reduce(
      (contador, produto) => contador + produto.quantidade,
      0
    );

    setQuantidadeProdutos(novaQuantidade);
  }, [carrinho, setQuantidadeProdutos]);

  return {
    carrinho,
    setCarrinho,
    adicionarProduto,
    removerProduto,
    quantidadeProdutos,
  };
};
