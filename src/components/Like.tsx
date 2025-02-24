import { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";

interface Props {
  onClick: () => void;
}

function Like({ onClick }: Props) {
  const [likeStatus, likeStatusChanger] = useState(false);

  const toggle = () => {
    likeStatusChanger(!likeStatus);
    onClick();
  };

  if (likeStatus) return <IoIosHeart color="red" onClick={toggle} />;
  else return <IoIosHeartEmpty onClick={toggle} />;
}

export default Like;
