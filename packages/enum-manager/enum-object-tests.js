// EnumObject tests
Tinytest.add('name-is-readonly', function (test) {
  var e = new EnumObject('test');

  var a = e.name;

  var b;
  try {
    e.name = "changed"
  } catch (err) { /* Ignore */ }

  test.equal(a, e.name);
});

Tinytest.add('map-to-val', function (test) {
  var e = new EnumObject('test', {
    values: [
      "a",
      "b"
    ]
  });

  var tester = e.map('test', 1);
  test.equal(tester, "b");
});

Tinytest.add('map-to-key', function (test) {
  var e = new EnumObject('test', {
    values: [
      "a",
      "b"
    ]
  });

  var tester = e.map('test', "a");
  test.equal(tester, 0);
});
