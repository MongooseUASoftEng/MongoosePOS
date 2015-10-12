// This has to be in a deeper directory than the files where we add the enums so that EnumObject exists.
// This is because of the way that meteor builds the files.
// Go to http://docs.meteor.com/#/full/structuringyourapp and then scroll down to
// "File Load Order" for an explanation.
enumManager = new EnumManager();
