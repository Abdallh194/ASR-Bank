import {
  navbarItems1,
  navbarItems2,
  navbarItems3,
  navbarItems4,
} from "@/constants";
import { TNavbarMenu } from "@/types";
import { NavDropdown, Row } from "react-bootstrap";

const DropdownMenu: React.FC<TNavbarMenu> = ({ title, id, items }) => {
  return (
    <NavDropdown title={title} id={id}>
      <Row>
        {items.map((item, index) => (
          <NavDropdown.Item href={item.href} key={index}>
            <span className="icon">{item.icon}</span> {item.label}
          </NavDropdown.Item>
        ))}
      </Row>
    </NavDropdown>
  );
};

const DropMenu: React.FC = () => {
  return (
    <>
      <DropdownMenu title="Retail" id="dropdown-basic-1" items={navbarItems1} />
      <DropdownMenu
        title="Corporate"
        id="dropdown-basic-2"
        items={navbarItems2}
      />
      <DropdownMenu title="SMEs" id="dropdown-basic-3" items={navbarItems3} />
      <DropdownMenu
        title="Self Services"
        id="dropdown-basic-4"
        items={navbarItems4}
      />
    </>
  );
};

export default DropMenu;
