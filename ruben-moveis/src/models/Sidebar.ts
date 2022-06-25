

export interface MenuItemModel {
    path?: string;
    label: string;
}
  
export interface MenuParentItem extends MenuItemModel {
    items: MenuItemModel[];
}