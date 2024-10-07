import { LeftTopIcon, RightBottomIcon } from "./Icons/Icons";

export default function Background() {
  return (
    <div>
      <span className="absolute left-0 top-0">
        <LeftTopIcon />
      </span>
      <span className="absolute bottom-0 right-0">
        <RightBottomIcon />
      </span>
    </div>
  );
}
