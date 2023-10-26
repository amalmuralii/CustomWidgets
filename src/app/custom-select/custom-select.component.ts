import { Component } from '@angular/core';

interface Item {
  label: string;
  selected: boolean;
  originalOrder: number;
}

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent {
  items: Item[] = [
    { label: 'Item 1', selected: false, originalOrder: 1 },
    { label: 'Item 2', selected: false, originalOrder: 2 },
    { label: 'Item 3', selected: false, originalOrder: 3 },
    { label: 'Item 4', selected: false, originalOrder: 4 },
    { label: 'Item 5', selected: false, originalOrder: 5 },
  ];

  selectedItems: Item[] = [];
  keys: any[] = [];

toggleSelection(item: Item, box: string): void {
  if (box === 'left') {
    item.selected = !item.selected;
  } else if (box === 'right') {
    const selectedItem = this.selectedItems.find(item => item.label === item.label);
    if (selectedItem) {
      selectedItem.selected = !selectedItem.selected;
    }
  }
}

  moveRight(): void {
    const selectedLeftItems = this.items.filter(item => item.selected);
    selectedLeftItems.forEach(item => {
      item.selected = false;
      item.originalOrder = this.selectedItems.length + 1;
      this.selectedItems.push(item);
    });
    this.items = this.items.filter(item => !item.selected);
  }

  moveLeft(): void {
    const selectedRightItems = this.selectedItems.filter(item => item.selected);
    selectedRightItems.forEach(item => {
      item.selected = false;
      item.originalOrder = this.items.length + 1;
      this.items.push(item);
    });
    this.selectedItems = this.selectedItems.filter(item => !item.selected);
  }
}
