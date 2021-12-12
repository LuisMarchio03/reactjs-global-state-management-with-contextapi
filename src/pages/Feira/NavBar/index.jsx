import { Nav } from "./styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";

const NavBar = () => {
  return (
    <Nav>
      <IconButton>
        <Badge color="primary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  );
};

export default NavBar;
