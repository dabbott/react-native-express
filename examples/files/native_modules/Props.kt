class ChartManager : SimpleViewManager<ChartView>() {

  @ReactProp(name = "myInt", defaultInt = 0)
  fun setMyInt(view: ChartView, myInt: Int) {
      view.myInt = myInt
      view.invalidate()
  }

  @ReactProp(name = "myColor")
  fun setMyColor(view: ChartView, myColor: String?) {
      view.myColor = Color.parseColor(myColor)
      view.invalidate()
  }

  @ReactProp(name = "myArray")
  fun setMyArray(view: ChartView, array: ReadableArray?) {
      // Do something with the data
      view.invalidate()
  }

}