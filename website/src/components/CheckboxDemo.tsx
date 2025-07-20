import { Checkbox, type CheckboxColor, type CheckboxSize } from "kitty-react";
import { type ReactElement, useState } from "react";

export function BasicCheckbox(): ReactElement {
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-4">
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="基础多选框"
      />
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="带描述的多选框"
        description="这是一个带有描述信息的多选框"
      />
    </div>
  );
}

export function CheckboxSizes(): ReactElement {
  const sizes: CheckboxSize[] = ["sm", "md", "lg"];

  return (
    <div className="space-y-4">
      {sizes.map((size) => (
        <Checkbox
          key={size}
          size={size}
          label={`${size.toUpperCase()} 尺寸多选框`}
          description={`这是 ${size} 尺寸的多选框`}
        />
      ))}
    </div>
  );
}

export function CheckboxColors(): ReactElement {
  const colors: CheckboxColor[] = ["blue", "green", "red", "gray"];

  return (
    <div className="space-y-4">
      {colors.map((color) => (
        <Checkbox
          key={color}
          color={color}
          defaultChecked
          label={`${color} 颜色多选框`}
          description={`这是 ${color} 颜色的多选框`}
        />
      ))}
    </div>
  );
}

export function CheckboxStates(): ReactElement {
  const [indeterminate, setIndeterminate] = useState(true);

  return (
    <div className="space-y-4">
      <Checkbox disabled label="禁用状态" />
      <Checkbox disabled defaultChecked label="禁用且选中状态" />
      <Checkbox
        indeterminate={indeterminate}
        onChange={(e) => {
          setIndeterminate(false);
        }}
        label="不确定状态"
        description="点击可切换到选中状态"
      />
      <Checkbox error label="错误状态" errorMessage="这是一个错误信息" />
    </div>
  );
}

export function CheckboxGroup(): ReactElement {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const items = [
    { id: "apple", label: "苹果", description: "红色的水果" },
    { id: "banana", label: "香蕉", description: "黄色的水果" },
    { id: "orange", label: "橙子", description: "橙色的水果" },
  ];

  const handleItemChange = (itemId: string, checked: boolean) => {
    if (checked) {
      setSelectedItems([...selectedItems, itemId]);
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    }
  };

  const allSelected = selectedItems.length === items.length;
  const someSelected =
    selectedItems.length > 0 && selectedItems.length < items.length;

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItems(items.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  return (
    <div className="space-y-4">
      <Checkbox
        checked={allSelected}
        indeterminate={someSelected}
        onChange={(e) => handleSelectAll(e.target.checked)}
        label="全选"
        description={`已选择 ${selectedItems.length} / ${items.length} 项`}
      />
      <div className="ml-6 space-y-2">
        {items.map((item) => (
          <Checkbox
            key={item.id}
            checked={selectedItems.includes(item.id)}
            onChange={(e) => handleItemChange(item.id, e.target.checked)}
            label={item.label}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

interface CheckboxDemoExports {
  BasicCheckbox: typeof BasicCheckbox;
  CheckboxSizes: typeof CheckboxSizes;
  CheckboxColors: typeof CheckboxColors;
  CheckboxStates: typeof CheckboxStates;
  CheckboxGroup: typeof CheckboxGroup;
}

const exports: CheckboxDemoExports = {
  BasicCheckbox,
  CheckboxSizes,
  CheckboxColors,
  CheckboxStates,
  CheckboxGroup,
};

export default exports;
