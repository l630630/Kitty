import { Button } from "@my-component-library/ui-core";
import type React from "react";

export function BasicButtons() {
  return (
    <div className="flex flex-wrap gap-4 my-6">
      <Button>默认按钮</Button>
      <Button variant="secondary">次要按钮</Button>
      <Button variant="outline">描边按钮</Button>
      <Button variant="ghost">幽灵按钮</Button>
    </div>
  );
}

export function ButtonSizes(): React.ReactElement {
  return (
    <div className="flex items-center flex-wrap gap-4 my-6">
      <Button size="sm">小按钮</Button>
      <Button size="md">中按钮</Button>
      <Button size="lg">大按钮</Button>
    </div>
  );
}

export function DisabledButtons() {
  return (
    <div className="flex flex-wrap gap-4 my-6">
      <Button disabled>禁用按钮</Button>
      <Button variant="secondary" disabled>
        禁用按钮
      </Button>
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
  BasicButtons: typeof BasicButtons;
  ButtonSizes: typeof ButtonSizes;
  DisabledButtons: typeof DisabledButtons;
  FullWidthButton: typeof FullWidthButton;
}

const exports: ButtonDemoExports = {
  BasicButtons,
  ButtonSizes,
  DisabledButtons,
  FullWidthButton,
};

export default exports;
