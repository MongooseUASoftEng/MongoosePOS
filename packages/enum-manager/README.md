## Usage

    var em = new EnumManager();

    // Add an enum to manage
    em.add('test1', [
      "a",
      "b",
      "c"
    ]);

    // Add another enum
    em.add('test2', [
      "d",
      "e",
      "f"
    ]);

    // Map a value to a key
    var key = em.map('test1', "b"); // => 1

    // Map a key to a value
    var key = em.map('test2', 2); // => "f"

    var enums = em.get(); // => [test1 as an EnumObject, test2 as an EnumObject]

## EnumManager API

#### Constructor: new EnumManager (enums)
Creates an EnumManager object.

```enums``` is an array of objects with a property of ```name``` and a property of an object containing a property of ```values``` an array of values.

Ex:
```enums = [ {
  name: "test",
  { values: [
    "a",
    "b"
  ] } } ];```

#### EnumManager.add(enum)
Adds an enum to be managed. An enum is an object with a property of ```name``` and a property that is an object with a property of ```values``` that is an array of values.

    var em = new EnumManager();

    em.add('test', {
      values: [
        "a",
        "b"
      ]
    });

#### EnumManager.map(name, in)

```name``` is the name of the enum you want to map.
```in``` is a string if you want to map to the key, or it is a number if you want to map to the value.

  *Generally, pass the value to be mapped to the key if you are inserting into the database and pass the key to be mapped to the value if you are reading the object out of the database for a view on the client.*

Returns the key of the value if a value(String) is passed in or returns the value of the key if a key(Number) is passed in.

    var em = new EnumManager();

    em.add('test', {
      values: [
        "a",
        "b"
      ]
    });

    var toVal = em.map('test', 0); // => "a"
    var toKey = em.map('test', "a"); // => 0

#### EnumManager.get(name)

```name``` is a String of the name of the enum you want. It is also optional.

If passed a name, this returns an EnumObject, if not, it returns an array of all EnumObjects in the manager.

## EnumObject API

You can't declare one of these outside of the package because with the EnumManager and with what we are doing, there's no reason to have individual EnumObject's.

You can get EnumObject's by calling EnumManager.get()

#### EnumObject.map(in)

```in``` is a string if you want to map to the key, or it is a number if you want to map to the value.

  *Generally, pass the value to be mapped to the key if you are inserting into the database and pass the key to be mapped to the value if you are reading the object out of the database for a view on the client.*

#### EnumObject.values()

Returns array with the values in the enum.
