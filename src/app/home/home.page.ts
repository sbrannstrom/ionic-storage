import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  key: string;
  value: string;
  storageKey: string;
  storageValue: string;

  constructor(
    private storage: Storage
  ) { }

  async setStorage() {
    await this.storage.set(this.key, this.value);
    this.key = '';
    this.value = '';
  }

  async readStorage(e: any) {
    this.storageValue = await this.storage.get(e);
    this.storageKey = e;
    if (!this.storageValue) {
      this.storageValue = 'Not found!';
    }
  }

  reset() {
    this.value = '';
    this.key = '';
    this.storageKey = '';
    this.storageValue = '';
    this.storage.clear();
  }
}
