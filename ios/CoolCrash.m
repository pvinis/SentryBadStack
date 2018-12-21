//
//  CoolCrash.m
//  SentryBadStack
//
//  Created by Pavlos Vinieratos on 21/12/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "CoolCrash.h"

#import <React/RCTBridgeModule.h>


@implementation CoolCrash

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(letsDoIt)
{
  NSArray *a = @[@"wow"];
  NSString *b = [a objectAtIndex:25]; // native crash report should show this line
  NSLog(@"%@", b);
}

@end
