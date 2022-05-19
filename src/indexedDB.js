//新建数据库，接收两个参数（数据库名，版本）
function openDB(dbname, version = 1) {
  return new Promise((resolve, reject) => {
    //兼容浏览器
    var indexedDB =
      window.indexedDB ||
      window.mozIndexedDB ||
      window.webkitIndexedDB ||
      Window.msIndexedDB;
    //存储数据库事件
    let db;
    //打开数据库，没有则会创建
    const request = indexedDB.open(dbname, version);
    //成功的回调函数
    request.onsuccess = function (event) {
      // 数据库对象 实例里面有crud方法
      db = event.target.result;
      console.log("数据库打开成功");
      resolve(db);
    };
    //数据库打开失败的回调函数
    request.onerror = function (event) {
      console.log("数据库打开失败");
    };
    //数据库更新时候的回调
    request.onupgradeneeded = function (event) {
      //数据库创建或升级的时候会触发
      console.log("数据库更新");
      db = event.target.result;
      var objectStore;
      //创建存储库（表） signalchat表
      objectStore = db.createObjectStore("users", {
        //这是主键
        keyPath: "uuid",
      });
      //创建索引，查询数据根据索引查
      objectStore.createIndex("uuid", "uuid", { unique: true });
      objectStore.createIndex("name", "name", { unique: false });
      objectStore.createIndex("age", "age", { unique: false });
    };
  });
}

//插入数据

//数据库实例， 表名，插入的数据
function addData(db, storeName, data) {
  var request = db
    .transaction([storeName], "readwrite")
    .objectStore(storeName)
    .add(data);

  request.onsuccess = function (event) {
    console.log("数据写入成功");
  };
  request.onerror = function (event) {
    console.log("数据写入失败");
  };
}
//通过主键查询数据

function getDataByKey(db, storeName, key) {
  return new Promise((resolve, reject) => {
    //事务
    let transaction = db.transaction([storeName]);
    //对象仓库
    let objectStore = transaction.objectStore(storeName);
    //通过主键获取数据
    let request = objectStore.get(key);

    request.onerror = function (event) {
      console.log("事务失败");
    };
    request.onsuccess = function (event) {
      console.log("主键查询结果是：", request.result);
      resolve(request.result);
    };
  });
}

//通过游标查询数据

function cursorGetData(db, storeName) {
  let list = [];
  let store = db.transaction(storeName, "readwrite").objectStore(storeName);
  //开启一个游标
  let request = store.openCursor();
  //游标开启成功
  request.onsuccess = function (e) {
    console.log("游标开启");
    let cursor = e.target.result;
    if (cursor) {
      list.push(cursor.value);
      cursor.continue();
    } else {
      console.log("游标查询的数据是", list);
    }
  };
}

//通过索引查询数据
function getDataByIndex(db, storeName, indexName, indexValue) {
  var store = db.transaction(storeName, "readwrite").objectStore(storeName);
  var request = store.index(indexName).get(indexValue);
  request.onerror = function () {
    console.log("事务失败");
  };
  request.onsuccess = function (e) {
    var result = e.target.result;
    console.log("索引查询结果", result);
  };
}

//通过索引和游标查询所有数据

function cursorGetDataByIndex(db, storeName, indexName, indexValue) {
  var list = [];
  var store = db.transaction(storeName, "readwrite").objectStore(storeName);
  var request = store.index(indexName).openCursor(IDBKeyRange.only(indexValue));
  request.onerror = function () {
    console.log("事务失败");
  };
  request.onsuccess = function (e) {
    var cursor = e.target.result;
    if (cursor) {
      list.push(cursor.value);
      cursor.continue();
    } else {
      console.log("游标索引查询结果", list);
    }
  };
}

//游标索引分页查询

function cursorGetDataByIndexAndPage(
  db,
  storeName,
  indexName,
  indexValue,
  page,
  pageSize
) {
  let list = [];
  let counter = 0;
  let advanced = true;
  var store = db.transaction(storeName, "readwrite").objectStore(storeName);
  var request = store.index(indexName).openCursor(IDBKeyRange.only(indexValue));
  request.onsuccess = function (e) {
    var cursor = e.target.result;
    if (page > 1 && advanced) {
      advanced = false;
      cursor.advanced((page - 1) * pageSize);
      return;
    }
    if (cursor) {
      list.push(cursor.value);
      counter++;
      if (counter < pageSize) {
        cursor.continue();
      } else {
        cursor = null;
        console.log("分页查询结果", list);
      }
    } else {
      console.log("分页查询结果", list);
    }
  };
  request.onerror = function (e) {};
}

//更新数据

function updateDB(db, storeName, data) {
  var request = db
    .transaction([storeName], "readwrite")
    .objectStore(storeName)
    .put(data);

  request.onsuccess = function () {
    console.log("数据更新成功");
  };

  request.onerror = function () {
    console.log("数据更新失败");
  };
}

//删除数据

function deleteDB(db, storeName, id) {
  var request = db
    .transaction([storeName], "readwrite")
    .objectStore(storeName)
    .delete(id);

  request.onsuccess = function () {
    console.log("数据删除成功");
  };

  request.onerror = function () {
    console.log("数据删除失败");
  };
}

//游标索引删除数据

function cursorDelete(db, storeName, indexName, indexValue) {
  var store = db.transaction(storeName, "readwrite").objectStore(storeName);
  var request = store.index(indexName).openCursor(IDBKeyRange.only(indexValue));

  request.onsuccess = (e) => {
    var cursor = e.target.result;
    var deleteRequest;
    if (cursor) {
      deleteRequest = cursor.delete();
      deleteRequest.onerror = function () {
        console.log("游标删除该记录失败");
      };
      deleteRequest.onsuccess = function () {
        console.log("游标删除该记录成功");
      };
      cursor.continue();
    }
  };
  request.onerror = function (e) {};
}

//关闭数据库

function closeDB(db) {
  db.close();
  console.log("数据库已关闭");
}
