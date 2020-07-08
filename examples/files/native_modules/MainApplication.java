// ...

protected List<ReactPackage> getPackages() {
  List<ReactPackage> packages = new PackageList(this).getPackages();
  packages.add(new MyPackage());
  return packages;
}

// ...