import {
  Button,
  Drawer,
  type DrawerPlacement,
  type DrawerSize,
} from "kitty-react";
import { type ReactElement, useState } from "react";

export function BasicDrawer(): ReactElement {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={showDrawer}>打开抽屉</Button>
      <Drawer open={open} onClose={closeDrawer} title="基础抽屉">
        <p>这是一个基础抽屉的内容</p>
        <p className="mt-4">你可以放置任何内容在这里</p>
      </Drawer>
    </div>
  );
}

export function PlacementDrawer(): ReactElement {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerPlacement>("right");

  const showDrawer = (p: DrawerPlacement) => {
    // 如果抽屉已经打开，先关闭它
    if (open) {
      setOpen(false);
      // 等待抽屉关闭动画完成后再更改方向并重新打开
      setTimeout(() => {
        setPlacement(p);
        setTimeout(() => {
          setOpen(true);
        }, 50);
      }, 300);
    } else {
      // 如果抽屉未打开，直接设置方向并打开
      setPlacement(p);
      setTimeout(() => {
        setOpen(true);
      }, 50);
    }
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <div className="flex flex-wrap gap-4">
      <Button onClick={() => showDrawer("top")}>从上方打开</Button>
      <Button onClick={() => showDrawer("right")}>从右侧打开</Button>
      <Button onClick={() => showDrawer("bottom")}>从下方打开</Button>
      <Button onClick={() => showDrawer("left")}>从左侧打开</Button>

      <Drawer
        key={placement} // 添加key属性，确保在placement改变时重新渲染组件
        open={open}
        onClose={closeDrawer}
        placement={placement}
        title={`${placement}方向的抽屉`}
      >
        <p>这是一个可以从不同方向打开的抽屉</p>
      </Drawer>
    </div>
  );
}

export function SizeDrawer(): ReactElement {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<DrawerSize>("md");

  const showDrawer = (s: DrawerSize) => {
    // 如果抽屉已经打开，先关闭它
    if (open) {
      setOpen(false);
      // 等待抽屉关闭动画完成后再更改尺寸并重新打开
      setTimeout(() => {
        setSize(s);
        setTimeout(() => {
          setOpen(true);
        }, 50);
      }, 300);
    } else {
      // 如果抽屉未打开，直接设置尺寸并打开
      setSize(s);
      setTimeout(() => {
        setOpen(true);
      }, 50);
    }
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <div className="flex flex-wrap gap-4">
      <Button onClick={() => showDrawer("sm")}>小抽屉</Button>
      <Button onClick={() => showDrawer("md")}>中抽屉</Button>
      <Button onClick={() => showDrawer("lg")}>大抽屉</Button>
      <Button onClick={() => showDrawer("full")}>全屏抽屉</Button>

      <Drawer
        key={size} // 添加key属性，确保在size改变时重新渲染组件
        open={open}
        onClose={closeDrawer}
        size={size}
        title={`${size}尺寸的抽屉`}
      >
        <p>这是一个不同尺寸的抽屉</p>
      </Drawer>
    </div>
  );
}

export function FooterDrawer(): ReactElement {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={showDrawer}>带页脚的抽屉</Button>
      <Drawer
        open={open}
        onClose={closeDrawer}
        title="带页脚的抽屉"
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={closeDrawer}>
              取消
            </Button>
            <Button onClick={closeDrawer}>确定</Button>
          </div>
        }
      >
        <p>这是一个带有页脚的抽屉</p>
        <p className="mt-4">页脚通常用于放置操作按钮</p>
      </Drawer>
    </div>
  );
}

interface DrawerDemoExports {
  BasicDrawer: typeof BasicDrawer;
  PlacementDrawer: typeof PlacementDrawer;
  SizeDrawer: typeof SizeDrawer;
  FooterDrawer: typeof FooterDrawer;
}

const exports: DrawerDemoExports = {
  BasicDrawer,
  PlacementDrawer,
  SizeDrawer,
  FooterDrawer,
};

export default exports;
