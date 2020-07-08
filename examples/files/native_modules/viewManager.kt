class MyViewManager : SimpleViewManager<MyView>() {
  companion object {
    private const val REACT_CLASS = "MyView"
  }

  override fun getName(): String {
    return REACT_CLASS
  }

  override fun createViewInstance(reactContext: ThemedReactContext): MyView {
    return MyView(reactContext)
  }
}