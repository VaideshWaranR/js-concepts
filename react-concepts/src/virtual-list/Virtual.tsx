import React from "react";
import { List, type RowComponentProps } from "react-window";

const Virtual = ({ numberOfItems }: { numberOfItems: number }) => {
  const items = Array.from(
    { length: numberOfItems },
    (_, ind) => "Item -" + ind,
  );
  return (
    <div className="flex w-full flex-col items-center overflow-hidden h-screen">
      <div>Virtual</div>
      <List
        style={{ width: "50%", height: "100px"}}
        rowComponent={ListComponent}
        rowCount={items.length}
        rowHeight={25}
        rowProps={{ items }}
        overscanCount={10}
      />
    </div>
  );
};

const ListComponent = React.memo(({
  index,
  items,
  style,
}: RowComponentProps<{
  items: string[];
}>) => {
  console.log(index)
  return (
    <div style={style}>
      {items[index]}
    </div>
  );
});
ListComponent.displayName="ListComponent"
export default Virtual;