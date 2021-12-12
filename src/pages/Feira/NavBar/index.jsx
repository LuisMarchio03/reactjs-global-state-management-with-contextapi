import { Nav } from "./styles";
import { useHistory } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import { useCarrinhoContext } from "../../../common/contexts/Carrinho";

const NavBar = () => {
  const { quantidadeProdutos } = useCarrinhoContext();
  const history = useHistory();

  return (
    <Nav>
      <IconButton
        disabled={quantidadeProdutos === 0}
        onClick={() => history.push("/carrinho")}
      >
        <Badge color="primary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  );
};

export default NavBar;
