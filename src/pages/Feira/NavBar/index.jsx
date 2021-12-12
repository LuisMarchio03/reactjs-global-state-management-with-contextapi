import { Nav } from "./styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import { useCarrinhoContext } from "../../../common/contexts/Carrinho";

const NavBar = () => {
  const { quantidadeProdutos } = useCarrinhoContext();

  return (
    <Nav>
      <IconButton disabled={quantidadeProdutos === 0}>
        <Badge color="primary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  );
};

export default NavBar;
