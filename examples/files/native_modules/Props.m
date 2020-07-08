#import <Foundation/Foundation.h>

#import "React/RCTViewManager.h"

@interface RCT_EXTERN_MODULE(MyViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(myInt, Int)
RCT_EXPORT_VIEW_PROPERTY(myColor, UIColor)
RCT_EXPORT_VIEW_PROPERTY(myArray, NSArray)

@end
