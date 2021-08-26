# Ionic 5 Storage
### An Ionic 5 with Ionic Storage (SQLite) sample repo (Android).
#### Created by `Simon Brännström`.

NOTE: If you want to create this demo from scratch, remember to do (either yarn or npm) `yarn add @ionic/storage-angular cordova-sqlite-storage localforage-cordovasqlitedriver` before the below instructions. GL!
------

To get started, add the following imports to `app.module.ts`:

```ts
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
```
Add this to the `imports` section:
```ts
IonicStorageModule.forRoot({
  driverOrder: [CordovaSQLiteDriver._driver, Drivers.IndexedDB]
}),
```

Now import `Storage` and `CordovaSQLiteDriver` into `app.component.ts`:
```ts
import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
```

Now we need to create the storage, this is how `app.components.ts` should look like below the imports:
```ts
export class AppComponent implements OnInit {
  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.storage.defineDriver(CordovaSQLiteDriver);
    await this.storage.create();
  }
}
```

That's it!
Now you're ready to use the storage in your app as such:

```ts
// other imports here
...
import { Storage } from '@ionic/storage-angular';

// class declaration here
...
constructor(private storage: Storage) {}

async setStorage() {
  await this.storage.set('foo', true);
}

async readStorage() {
  const bar = await this.storage.get('foo');
  console.log(bar); // true
}
```

There's of course more functions in the readme for Ionic storage at Github:
https://github.com/ionic-team/ionic-storage