import { Button } from "kitty-react";
import { type ReactElement } from "react";

export function VariantButtons() {
  return (
    <div className="flex flex-wrap gap-4 my-6">
      <Button>默认按钮</Button>
      <Button variant="secondary">次要按钮</Button>
      <Button color="green">成功按钮</Button>
      <Button color="red">危险按钮</Button>
      <Button color="gray">信息按钮</Button>
      <Button variant="outline">描边按钮</Button>
      <Button variant="ghost">幽灵按钮</Button>
    </div>
  );
}

export function ButtonSizes(): ReactElement {
  return (
    <div className="flex items-center flex-wrap gap-4 my-6">
      <Button size="sm">小按钮</Button>
      <Button size="md">中按钮</Button>
      <Button size="lg">大按钮</Button>
    </div>
  );
}

export function StatesButtons() {
  return (
    <div className="flex flex-wrap gap-4 my-6">
      <Button disabled>禁用按钮</Button>
      <Button variant="secondary" disabled>
        禁用按钮
      </Button>
      <Button loading={true}>加载中按钮</Button>
    </div>
  );
}

export function FullWidthButton() {
  return (
    <div className="w-full my-6">
      <Button fullWidth>宽度撑满</Button>
    </div>
  );
}

interface ButtonDemoExports {
  VariantButtons: typeof VariantButtons;
  ButtonSizes: typeof ButtonSizes;
  StatesButtons: typeof StatesButtons;
  FullWidthButton: typeof FullWidthButton;
}

const exports: ButtonDemoExports = {
  VariantButtons,
  ButtonSizes,
  StatesButtons,
  FullWidthButton,
};

export default exports;
