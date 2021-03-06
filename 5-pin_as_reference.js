// 5 pin strip

For module labeled X000ZYJ6KH LEDNET Smart WiFi Controller

71 23 0f a3 on
71 24 0f a4 off

Note: you can send color commands regardless of it being on or off,
so that when turned on, it will immediatly start at that color.

31 ff 00 00 00 00 f0 0f 2f red only
31 00 ff 00 00 00 f0 0f 2f green only
31 00 00 ff 00 00 f0 0f 2f blue only
31 ff ff 00 00 00 f0 0f 2e yellow     (exactly r255 g255 b0  )
31 ff 00 ff 00 00 f0 0f 2e purple     (exactly r255 g0   b255)
31 00 ff ff 00 00 f0 0f 2e lt blue    (exactly r0   g255 b255)
31 ff ff ff 00 00 f0 0f 2d white      (exactly r255 g255 b255) Note: WW and CW at the end
31 00 00 00 00 00 f0 0f 30 colors off (exactly r0   g0   b0  )

31 cc 00 00 00 00 f0 0f fc red only, 80% bright   (exactly r204 g0   b0  )
31 99 00 00 00 00 f0 0f c9 red only, 60% bright   (exactly r153 g0   b0  )
31 66 00 00 00 00 f0 0f 96 red only, 40% bright   (exactly r102 g0   b0  )
31 33 00 00 00 00 f0 0f 63 red only, 20% bright   (exactly r51  g0   b0  )
31 19 00 00 00 00 f0 0f 49 red only, 10% bright   (exactly r26  g0   b0  )

31 00 cc 00 00 00 f0 0f fc green only, 80% bright   (exactly r0   g204 b0  )
31 00 99 00 00 00 f0 0f c9 green only, 60% bright   (exactly r0   g153 b0  )
31 00 66 00 00 00 f0 0f 96 green only, 40% bright   (exactly r0   g102 b0  )
31 00 33 00 00 00 f0 0f 63 green only, 20% bright   (exactly r0   g51  b0  )
31 00 19 00 00 00 f0 0f 49 green only, 10% bright   (exactly r0   g26  b0  )

31 00 00 cc 00 00 f0 0f fc blue only, 80% bright    (exactly r0   g0   b204)
31 00 00 99 00 00 f0 0f c9 blue only, 60% bright    (exactly r0   g0   b153)
31 00 00 66 00 00 f0 0f 96 blue only, 40% bright    (exactly r0   g0   b102)
31 00 00 33 00 00 f0 0f 63 blue only, 20% bright    (exactly r0   g0   b51 )
31 00 00 19 00 00 f0 0f 49 blue only, 10% bright    (exactly r0   g0   b26 )

31 cc cc 00 00 00 f0 0f c8 yellow, 80% bright   (exactly r204 g204 b0  )
31 99 99 00 00 00 f0 0f 62 yellow, 60% bright   (exactly r153 g153 b0  )
31 66 66 00 00 00 f0 0f fc yellow, 40% bright   (exactly r102 g102 b0  )
31 33 33 00 00 00 f0 0f 96 yellow, 20% bright   (exactly r51  g51  b0  )
31 19 19 00 00 00 f0 0f 62 yellow, 10% bright   (exactly r26  g26  b0  )

31 cc 00 cc 00 00 f0 0f c8 purple, 80% bright   (exactly r204 g0   b204)
31 99 00 99 00 00 f0 0f 62 purple, 60% bright   (exactly r153 g0   b153)
31 66 00 66 00 00 f0 0f fc purple, 40% bright   (exactly r102 g0   b102)
31 33 00 33 00 00 f0 0f 96 purple, 20% bright   (exactly r51  g0   b51 )
31 19 00 19 00 00 f0 0f 62 purple, 10% bright   (exactly r26  g0   b26 )

31 00 cc cc 00 00 f0 0f c8 lt blue, 80% bright  (exactly r0   g204 b204)
31 00 99 99 00 00 f0 0f 62 lt blue, 60% bright  (exactly r0   g153 b153)
31 00 66 66 00 00 f0 0f fc lt blue, 40% bright  (exactly r0   g102 b102)
31 00 33 33 00 00 f0 0f 96 lt blue, 20% bright  (exactly r0   g51  b51 )
31 00 19 19 00 00 f0 0f 62 lt blue, 10% bright  (exactly r0   g26  b26 )

31 cc cc cc 00 00 f0 0f 94 white, 80% bright  (exactly r204 g204 b204)
31 99 99 99 00 00 f0 0f fb white, 60% bright  (exactly r153 g153 b153)
31 66 66 66 00 00 f0 0f 62 white, 40% bright  (exactly r102 g102 b102)
31 33 33 33 00 00 f0 0f c9 white, 20% bright  (exactly r51  g51  b51 )
31 19 19 19 00 00 f0 0f 7b white, 10% bright  (exactly r26  g26  b26 )

61 25 10 0f a5 seven color cross fade (menu item 1)

61 26 10 0f a6 red gradual change 50% speed (menu item 2)
61 27 10 0f a7 green gradual change 50% speed (menu item 3)
61 28 10 0f a8 blue gradual change 50% speed (menu item 4)
61 2c 10 0f ac white gradual change 50% speed (menu item 8)

61 2d 10 0f ad red/green cross fade 50% speed (menu item 9)
61 2e 10 0f ae red/blue cross fade 50% speed (menu item 10)
61 2f 10 0f af green/blue cross fade 50% speed (menu item 11)

61 30 10 0f b0 seven color strobe flash 50% speed (menu item 12)
61 31 10 0f b1 red strobe flash 50% speed (menu item 13)
61 32 10 0f b2 green strobe flash 50% speed (menu item 14)
61 33 10 0f b3 blue strobe flash 50% speed (menu item 15)

61 37 01 0f a8 white strobe flash 100% speed
61 37 06 0f ad white strobe flash 80% speed
61 37 10 0f b7 white strobe flash 50% speed (menu item 19)
61 37 1c 0f c3 white strobe flash 10% speed

61 38 01 0f a9 seven color jumping change 100% speed
61 38 06 0f ae seven color jumping change 80% speed
61 38 10 0f b8 seven color jumping change 50% speed (menu item 20)
61 38 1c 0f c4 seven color jumping change 10% speed

31 00 00 00 ff 00 0f 0f 4e WW, 100% bright (warm white)
31 00 00 00 cc 00 0f 0f 1b WW, 80% bright
31 00 00 00 66 00 0f 0f b5 WW, 40% bright

31 00 00 00 00 ff 0f 0f 4e CW, 100% bright (cool white)
31 00 00 00 00 cc 0f 0f 1b CW, 80% bright
31 00 00 00 00 66 0f 0f b5 CW, 40% bright

31 00 00 00 00 00 0f 0f 4f both WW and CW, off

31 00 00 00 66 66 0f 0f 1b both WW and CW, 40% bright

  Note: WW/CW has ^^ this octet different than with R/G/B
