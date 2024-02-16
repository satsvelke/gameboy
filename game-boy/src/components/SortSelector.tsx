import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

interface SortOrdersProps {
  onSelectedOrder: (selectedOrder: string) => void;
  selectedSortOrder: string;
}

const SortSelector = ({
  onSelectedOrder,
  selectedSortOrder,
}: SortOrdersProps) => {
  const sortOrders = [
    {
      label: "Relevance",
      value: "",
    },
    {
      label: "Date Added",
      value: "-added",
    },
    {
      label: "Name",
      value: "name",
    },
    {
      label: "Release Data",
      value: "-released",
    },
    {
      label: "Popularity",
      value: "-metacritic",
    },
    {
      label: "Average Rating",
      value: "-rating",
    },
  ];

  const currentSortOrder = sortOrders.find((c) => c.value == selectedSortOrder);

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<BsChevronBarDown></BsChevronBarDown>}
        >
          Order by : {currentSortOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((o) => (
            <MenuItem onClick={() => onSelectedOrder(o.value)} key={o.value}>
              {o.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
