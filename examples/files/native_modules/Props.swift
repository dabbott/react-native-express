class MyView: UIView {

  @objc var myInt: Int = 0 {
    didSet {
      // Do something...
    }
  }

  @objc var myColor: UIColor = UIColor.black {
    didSet {
      // Do something...
    }
  }

  @objc var myArray: NSArray = [] {
    didSet {
      // Do something...
    }
  }

}