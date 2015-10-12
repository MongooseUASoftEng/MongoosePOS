// EnumManager tests
Tinytest.add('add-enum', function (test) {
  var e = new EnumManager();
  e.add({
    name: "test",
    values: [
      "a",
      "b"
    ]
  });

  test.equal(e.get().length, 1);
});

Tinytest.add('enums-are-EnumObject', function (test) {
  var e = new EnumManager();
  e.add({
    name: "test",
    values: [
      "a",
      "b"
    ]
  });

  test.instanceOf(e.get()[0], EnumObject);
});

Tinytest.add('map-to-val', function (test) {
  var e = new EnumManager();
  e.add({
    name: "test",
    values: [
      "a",
      "b"
    ]
  });

  var tester = e.map('test', 1)
  test.equal(tester, "b");
});

Tinytest.add('map-to-key', function (test) {
  var e = new EnumManager();
  e.add({
    name: "test",
    values: [
      "a",
      "b"
    ]
  });

  var tester = e.map('test', "a")
  test.equal(tester, 0);
});
