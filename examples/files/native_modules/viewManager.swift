import Foundation

@objc(MyViewManager)
class MyViewManager: RCTViewManager {
  override func view() -> UIView! {
    return MyView(frame: .zero)
  }

  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
