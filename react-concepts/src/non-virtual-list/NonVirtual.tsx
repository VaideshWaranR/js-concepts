import React from "react";

const NonVirtual = ({numberOfItems} :{numberOfItems: number}) => {
  const Items = Array.from({ length: numberOfItems }, (_, ind) => (
    <ListItem key={ind}  index={ind}/>
  ));
  return (
    <div className="flex w-full flex-col items-center ">
      <div>NonVirtual</div>
      <ul className="border w-full flex flex-col items-center h-[500px] overflow-y-scroll">{Items}</ul>
    </div>
  );
};

const ListItem = ({ index }: { index: number }) => {
  return <li>ListItem - {index}</li>;
};
export default NonVirtual;
