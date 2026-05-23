; Selected ARM64 disassembly for libimage_processing_util_jni.so
; This is assembly-level recovery, not original C/C++ source.

; Java_androidx_camera_core_ImageProcessingUtil_nativeCopyBetweenByteBufferAndBitmap
; address=0x630c size=204
0x0000630c: str      x30, [sp, #-0x50]!
0x00006310: stp      x26, x25, [sp, #0x10]
0x00006314: stp      x24, x23, [sp, #0x20]
0x00006318: stp      x22, x21, [sp, #0x30]
0x0000631c: stp      x20, x19, [sp, #0x40]
0x00006320: mov      x19, x2
0x00006324: add      x2, sp, #8
0x00006328: mov      x1, x19
0x0000632c: mov      w21, w7
0x00006330: mov      w22, w6
0x00006334: mov      w23, w5
0x00006338: mov      w24, w4
0x0000633c: mov      x25, x3
0x00006340: mov      x20, x0
0x00006344: str      xzr, [sp, #8]
0x00006348: bl       #0x74e0
0x0000634c: cbnz     w0, #0x63a4
0x00006350: ldr      x8, [x20]
0x00006354: ldrb     w26, [sp, #0x50]
0x00006358: mov      x0, x20
0x0000635c: mov      x1, x25
0x00006360: ldr      x8, [x8, #0x730]
0x00006364: blr      x8
0x00006368: ldr      x2, [sp, #8]
0x0000636c: tst      w26, #0xff
0x00006370: mov      x3, x0
0x00006374: b.eq     #0x6384
0x00006378: mov      x0, x3
0x0000637c: mov      w1, w24
0x00006380: b        #0x6390
0x00006384: mov      x0, x2
0x00006388: mov      w1, w24
0x0000638c: mov      x2, x3
0x00006390: mov      w3, w23
0x00006394: mov      w4, w22
0x00006398: mov      w5, w21
0x0000639c: bl       #0x2990
0x000063a0: cbz      w0, #0x63c0
0x000063a4: mov      w0, #-1
0x000063a8: ldp      x20, x19, [sp, #0x40]
0x000063ac: ldp      x22, x21, [sp, #0x30]
0x000063b0: ldp      x24, x23, [sp, #0x20]
0x000063b4: ldp      x26, x25, [sp, #0x10]
0x000063b8: ldr      x30, [sp], #0x50
0x000063bc: ret      
0x000063c0: mov      x0, x20
0x000063c4: mov      x1, x19
0x000063c8: bl       #0x74f0
0x000063cc: cmp      w0, #0
0x000063d0: csetm    w0, ne
0x000063d4: b        #0x63a8

; Java_androidx_camera_core_ImageProcessingUtil_nativeShiftPixel
; address=0x63d8 size=440
0x000063d8: sub      sp, sp, #0x80
0x000063dc: stp      x29, x30, [sp, #0x20]
0x000063e0: stp      x28, x27, [sp, #0x30]
0x000063e4: stp      x26, x25, [sp, #0x40]
0x000063e8: stp      x24, x23, [sp, #0x50]
0x000063ec: stp      x22, x21, [sp, #0x60]
0x000063f0: stp      x20, x19, [sp, #0x70]
0x000063f4: ldr      x8, [x0]
0x000063f8: ldr      w26, [sp, #0x98]
0x000063fc: mov      x1, x2
0x00006400: mov      w19, w7
0x00006404: ldr      x8, [x8, #0x730]
0x00006408: mov      x20, x6
0x0000640c: mov      w22, w5
0x00006410: mov      x21, x4
0x00006414: mov      w24, w3
0x00006418: mov      x25, x0
0x0000641c: blr      x8
0x00006420: ldr      x8, [x25]
0x00006424: mov      x23, x0
0x00006428: mov      x0, x25
0x0000642c: mov      x1, x21
0x00006430: ldr      x8, [x8, #0x730]
0x00006434: blr      x8
0x00006438: ldr      x8, [x25]
0x0000643c: mov      x21, x0
0x00006440: mov      x0, x25
0x00006444: mov      x1, x20
0x00006448: ldr      x8, [x8, #0x730]
0x0000644c: blr      x8
0x00006450: cmp      w26, #1
0x00006454: b.lt     #0x656c
0x00006458: ldr      w10, [sp, #0xb0]
0x0000645c: ldr      w28, [sp, #0x90]
0x00006460: ldr      w8, [sp, #0xa0]
0x00006464: ldr      w9, [sp, #0xa8]
0x00006468: mov      x20, x0
0x0000646c: stp      x22, x19, [sp, #0x10]
0x00006470: sub      w11, w28, w8
0x00006474: stp      x9, x10, [sp]
0x00006478: sub      w9, w28, #1
0x0000647c: sub      w10, w24, w8
0x00006480: sxtw     x29, w24
0x00006484: sxtw     x19, w8
0x00006488: sxtw     x24, w9
0x0000648c: sxtw     x25, w10
0x00006490: sxtw     x22, w11
0x00006494: mov      w27, w26
0x00006498: add      x1, x23, x19
0x0000649c: mov      x0, x23
0x000064a0: mov      x2, x24
0x000064a4: bl       #0x7500
0x000064a8: ldrb     w8, [x23, x25]
0x000064ac: subs     x27, x27, #1
0x000064b0: strb     w8, [x23, x22]
0x000064b4: add      x23, x23, x29
0x000064b8: b.ne     #0x6498
0x000064bc: ldp      x9, x29, [sp, #0x10]
0x000064c0: cmp      w26, #2
0x000064c4: b.lt     #0x656c
0x000064c8: ldr      x10, [sp]
0x000064cc: cmp      w26, #0
0x000064d0: sxtw     x24, w9
0x000064d4: sub      w8, w9, w10
0x000064d8: cinc     w9, w26, lt
0x000064dc: cmp      w28, #0
0x000064e0: sxtw     x25, w8
0x000064e4: cinc     w8, w28, lt
0x000064e8: asr      w26, w8, #1
0x000064ec: asr      w23, w9, #1
0x000064f0: sub      w8, w26, #1
0x000064f4: sub      w9, w26, w10
0x000064f8: sxtw     x19, w10
0x000064fc: sxtw     x22, w8
0x00006500: sxtw     x27, w9
0x00006504: mov      x28, x23
0x00006508: add      x1, x21, x19
0x0000650c: mov      x0, x21
0x00006510: mov      x2, x22
0x00006514: bl       #0x7500
0x00006518: ldrb     w8, [x21, x25]
0x0000651c: subs     x28, x28, #1
0x00006520: strb     w8, [x21, x27]
0x00006524: add      x21, x21, x24
0x00006528: b.ne     #0x6508
0x0000652c: ldr      x10, [sp, #8]
0x00006530: sxtw     x19, w29
0x00006534: sub      w8, w29, w10
0x00006538: sub      w9, w26, w10
0x0000653c: sxtw     x21, w10
0x00006540: sxtw     x24, w8
0x00006544: sxtw     x25, w9
0x00006548: add      x1, x20, x21
0x0000654c: mov      x0, x20
0x00006550: mov      x2, x22
0x00006554: bl       #0x7500
0x00006558: ldrb     w8, [x20, x24]
0x0000655c: subs     x23, x23, #1
0x00006560: strb     w8, [x20, x25]
0x00006564: add      x20, x20, x19
0x00006568: b.ne     #0x6548
0x0000656c: ldp      x20, x19, [sp, #0x70]
0x00006570: ldp      x22, x21, [sp, #0x60]
0x00006574: ldp      x24, x23, [sp, #0x50]
0x00006578: ldp      x26, x25, [sp, #0x40]
0x0000657c: ldp      x28, x27, [sp, #0x30]
0x00006580: ldp      x29, x30, [sp, #0x20]
0x00006584: mov      w0, wzr
0x00006588: add      sp, sp, #0x80
0x0000658c: ret      

; Java_androidx_camera_core_ImageProcessingUtil_nativeWriteJpegToSurface
; address=0x6590 size=328
0x00006590: sub      sp, sp, #0x70
0x00006594: str      x30, [sp, #0x30]
0x00006598: stp      x24, x23, [sp, #0x40]
0x0000659c: stp      x22, x21, [sp, #0x50]
0x000065a0: stp      x20, x19, [sp, #0x60]
0x000065a4: mov      x1, x3
0x000065a8: mov      x19, x2
0x000065ac: mov      x20, x0
0x000065b0: bl       #0x7510
0x000065b4: cbz      x0, #0x6618
0x000065b8: ldr      x8, [x20]
0x000065bc: mov      x21, x0
0x000065c0: mov      x0, x20
0x000065c4: mov      x1, x19
0x000065c8: ldr      x8, [x8, #0x558]
0x000065cc: blr      x8
0x000065d0: mov      w22, w0
0x000065d4: add      w1, w0, #8
0x000065d8: mov      w2, #1
0x000065dc: mov      w3, #0x21
0x000065e0: mov      x0, x21
0x000065e4: bl       #0x7520
0x000065e8: mov      x1, sp
0x000065ec: mov      x0, x21
0x000065f0: mov      x2, xzr
0x000065f4: bl       #0x7530
0x000065f8: cbz      w0, #0x662c
0x000065fc: mov      x0, x21
0x00006600: bl       #0x7540
0x00006604: adrp     x1, #0
0x00006608: adrp     x2, #0
0x0000660c: add      x1, x1, #0xfb3
0x00006610: add      x2, x2, #0xf9c
0x00006614: b        #0x66b4
0x00006618: adrp     x1, #0
0x0000661c: adrp     x2, #0
0x00006620: add      x1, x1, #0xfb3
0x00006624: add      x2, x2, #0xf80
0x00006628: b        #0x66b4
0x0000662c: ldr      x8, [x20]
0x00006630: mov      x0, x20
0x00006634: mov      x1, x19
0x00006638: mov      x2, xzr
0x0000663c: ldr      x8, [x8, #0x5c0]
0x00006640: blr      x8
0x00006644: cbz      x0, #0x669c
0x00006648: ldr      x24, [sp, #0x10]
0x0000664c: mov      x23, x0
0x00006650: sxtw     x22, w22
0x00006654: mov      x1, x23
0x00006658: mov      x0, x24
0x0000665c: mov      x2, x22
0x00006660: bl       #0x74c0
0x00006664: mov      x0, x21
0x00006668: str      xzr, [x24, x22]
0x0000666c: bl       #0x7550
0x00006670: mov      x0, x21
0x00006674: bl       #0x7540
0x00006678: ldr      x8, [x20]
0x0000667c: mov      x0, x20
0x00006680: mov      x1, x19
0x00006684: mov      x2, x23
0x00006688: ldr      x8, [x8, #0x600]
0x0000668c: mov      w3, wzr
0x00006690: blr      x8
0x00006694: mov      w0, wzr
0x00006698: b        #0x66c0
0x0000669c: mov      x0, x21
0x000066a0: bl       #0x7540
0x000066a4: adrp     x1, #0
0x000066a8: adrp     x2, #0
0x000066ac: add      x1, x1, #0xfb3
0x000066b0: add      x2, x2, #0xfbf
0x000066b4: mov      w0, #6
0x000066b8: bl       #0x7560
0x000066bc: mov      w0, #-1
0x000066c0: ldp      x20, x19, [sp, #0x60]
0x000066c4: ldp      x22, x21, [sp, #0x50]
0x000066c8: ldp      x24, x23, [sp, #0x40]
0x000066cc: ldr      x30, [sp, #0x30]
0x000066d0: add      sp, sp, #0x70
0x000066d4: ret      

; Java_androidx_camera_core_ImageProcessingUtil_nativeConvertAndroid420ToABGR
; address=0x66d8 size=1144
0x000066d8: sub      sp, sp, #0xf0
0x000066dc: stp      x29, x30, [sp, #0x90]
0x000066e0: stp      x28, x27, [sp, #0xa0]
0x000066e4: stp      x26, x25, [sp, #0xb0]
0x000066e8: stp      x24, x23, [sp, #0xc0]
0x000066ec: stp      x22, x21, [sp, #0xd0]
0x000066f0: stp      x20, x19, [sp, #0xe0]
0x000066f4: ldr      x8, [x0]
0x000066f8: ldr      x22, [sp, #0x100]
0x000066fc: mov      x1, x2
0x00006700: mov      w26, w7
0x00006704: ldr      x8, [x8, #0x730]
0x00006708: mov      x19, x6
0x0000670c: mov      w27, w5
0x00006710: mov      x20, x4
0x00006714: mov      w28, w3
0x00006718: mov      x23, x0
0x0000671c: blr      x8
0x00006720: ldr      x8, [x23]
0x00006724: mov      x29, x0
0x00006728: mov      x0, x23
0x0000672c: mov      x1, x20
0x00006730: ldr      x8, [x8, #0x730]
0x00006734: blr      x8
0x00006738: ldr      x8, [x23]
0x0000673c: mov      x20, x0
0x00006740: mov      x0, x23
0x00006744: mov      x1, x19
0x00006748: ldr      x8, [x8, #0x730]
0x0000674c: blr      x8
0x00006750: mov      x21, x0
0x00006754: mov      x0, x23
0x00006758: mov      x1, x22
0x0000675c: bl       #0x7510
0x00006760: cbz      x0, #0x67b0
0x00006764: add      x1, sp, #0x60
0x00006768: mov      x2, xzr
0x0000676c: mov      x19, x0
0x00006770: bl       #0x7530
0x00006774: cbnz     w0, #0x69d0
0x00006778: ldr      w8, [sp, #0x6c]
0x0000677c: cmp      w8, #1
0x00006780: b.ne     #0x69d0
0x00006784: ldr      w25, [sp, #0x138]
0x00006788: ldr      x1, [sp, #0x108]
0x0000678c: cmp      w25, #0x10e
0x00006790: b.eq     #0x67a8
0x00006794: cmp      w25, #0xb4
0x00006798: mov      w8, w25
0x0000679c: b.eq     #0x67bc
0x000067a0: cmp      w25, #0x5a
0x000067a4: b.ne     #0x67b8
0x000067a8: mov      w8, w25
0x000067ac: b        #0x67bc
0x000067b0: mov      w29, #-1
0x000067b4: b        #0x69dc
0x000067b8: mov      w8, wzr
0x000067bc: ldr      w9, [sp, #0x118]
0x000067c0: ldr      w10, [sp, #0x110]
0x000067c4: ldr      w24, [sp, #0x120]
0x000067c8: ldr      x11, [sp, #0x70]
0x000067cc: mov      x0, xzr
0x000067d0: str      x9, [sp, #0x58]
0x000067d4: str      w8, [sp, #0x54]
0x000067d8: cbz      x1, #0x6800
0x000067dc: cbz      w25, #0x6800
0x000067e0: ldr      x8, [x23]
0x000067e4: mov      x0, x23
0x000067e8: mov      w22, w10
0x000067ec: mov      x23, x11
0x000067f0: ldr      x8, [x8, #0x730]
0x000067f4: blr      x8
0x000067f8: mov      x11, x23
0x000067fc: mov      w10, w22
0x00006800: ldr      w9, [sp, #0x68]
0x00006804: ldr      w23, [sp, #0x130]
0x00006808: ldr      w6, [sp, #0xf8]
0x0000680c: ldr      w8, [sp, #0x128]
0x00006810: cmp      w25, #0
0x00006814: lsl      w22, w10, #2
0x00006818: lsl      w9, w9, #2
0x0000681c: csel     x7, x0, x11, ne
0x00006820: csel     w12, w22, w9, ne
0x00006824: cmp      w24, #0
0x00006828: b.gt     #0x68b4
0x0000682c: cmp      w8, #0
0x00006830: b.gt     #0x68b4
0x00006834: cmp      w23, #1
0x00006838: b.ge     #0x68b4
0x0000683c: add      x4, x20, w8, sxtw
0x00006840: ldr      x8, [sp, #0x58]
0x00006844: str      x11, [sp, #0x30]
0x00006848: str      w10, [sp, #0x3c]
0x0000684c: str      w10, [sp, #0x10]
0x00006850: str      w8, [sp, #0x18]
0x00006854: adrp     x8, #0x8000
0x00006858: ldr      x8, [x8, #0x878]
0x0000685c: add      x0, x29, w24, sxtw
0x00006860: add      x2, x21, w23, sxtw
0x00006864: mov      w1, w28
0x00006868: mov      w3, w26
0x0000686c: mov      w5, w27
0x00006870: str      x8, [sp, #8]
0x00006874: stp      x7, x12, [sp, #0x40]
0x00006878: str      w12, [sp]
0x0000687c: bl       #0x29e0
0x00006880: mov      w29, w0
0x00006884: cbnz     w29, #0x69bc
0x00006888: cbz      w25, #0x69bc
0x0000688c: ldr      w8, [sp, #0x68]
0x00006890: ldp      x0, x1, [sp, #0x40]
0x00006894: ldr      x2, [sp, #0x30]
0x00006898: ldr      w4, [sp, #0x3c]
0x0000689c: ldr      w6, [sp, #0x54]
0x000068a0: lsl      w3, w8, #2
0x000068a4: ldr      x5, [sp, #0x58]
0x000068a8: bl       #0x4198
0x000068ac: mov      w29, w0
0x000068b0: b        #0x69bc
0x000068b4: ldr      w9, [sp, #0xf0]
; ... truncated after 120 instructions

; Java_androidx_camera_core_ImageProcessingUtil_nativeConvertAndroid420ToBitmap
; address=0x6b50 size=292
0x00006b50: sub      sp, sp, #0x90
0x00006b54: stp      x29, x30, [sp, #0x30]
0x00006b58: stp      x28, x27, [sp, #0x40]
0x00006b5c: stp      x26, x25, [sp, #0x50]
0x00006b60: stp      x24, x23, [sp, #0x60]
0x00006b64: stp      x22, x21, [sp, #0x70]
0x00006b68: stp      x20, x19, [sp, #0x80]
0x00006b6c: ldr      x20, [sp, #0xa0]
0x00006b70: mov      x26, x2
0x00006b74: add      x2, sp, #0x28
0x00006b78: mov      w22, w7
0x00006b7c: mov      x1, x20
0x00006b80: mov      x24, x6
0x00006b84: mov      w21, w5
0x00006b88: mov      x25, x4
0x00006b8c: mov      w23, w3
0x00006b90: mov      x19, x0
0x00006b94: str      xzr, [sp, #0x28]
0x00006b98: bl       #0x74e0
0x00006b9c: cbnz     w0, #0x6c38
0x00006ba0: ldr      x8, [x19]
0x00006ba4: ldr      w9, [sp, #0x98]
0x00006ba8: ldr      w28, [sp, #0xb8]
0x00006bac: ldr      w29, [sp, #0xb0]
0x00006bb0: ldr      x8, [x8, #0x730]
0x00006bb4: ldr      w27, [sp, #0xa8]
0x00006bb8: mov      x0, x19
0x00006bbc: mov      x1, x26
0x00006bc0: str      w9, [sp, #0x24]
0x00006bc4: blr      x8
0x00006bc8: ldr      x8, [x19]
0x00006bcc: mov      x26, x0
0x00006bd0: mov      x0, x19
0x00006bd4: mov      x1, x25
0x00006bd8: ldr      x8, [x8, #0x730]
0x00006bdc: blr      x8
0x00006be0: ldr      x8, [x19]
0x00006be4: mov      x25, x0
0x00006be8: mov      x0, x19
0x00006bec: mov      x1, x24
0x00006bf0: ldr      x8, [x8, #0x730]
0x00006bf4: blr      x8
0x00006bf8: str      w28, [sp, #0x18]
0x00006bfc: str      w29, [sp, #0x10]
0x00006c00: adrp     x8, #0x8000
0x00006c04: ldr      x7, [sp, #0x28]
0x00006c08: ldr      x8, [x8, #0x878]
0x00006c0c: ldr      w6, [sp, #0x24]
0x00006c10: mov      x2, x0
0x00006c14: mov      x0, x26
0x00006c18: mov      w1, w23
0x00006c1c: mov      w3, w22
0x00006c20: mov      x4, x25
0x00006c24: mov      w5, w21
0x00006c28: str      x8, [sp, #8]
0x00006c2c: str      w27, [sp]
0x00006c30: bl       #0x29e0
0x00006c34: cbz      w0, #0x6c5c
0x00006c38: mov      w0, #-1
0x00006c3c: ldp      x20, x19, [sp, #0x80]
0x00006c40: ldp      x22, x21, [sp, #0x70]
0x00006c44: ldp      x24, x23, [sp, #0x60]
0x00006c48: ldp      x26, x25, [sp, #0x50]
0x00006c4c: ldp      x28, x27, [sp, #0x40]
0x00006c50: ldp      x29, x30, [sp, #0x30]
0x00006c54: add      sp, sp, #0x90
0x00006c58: ret      
0x00006c5c: mov      x0, x19
0x00006c60: mov      x1, x20
0x00006c64: bl       #0x74f0
0x00006c68: cmp      w0, #0
0x00006c6c: csetm    w0, ne
0x00006c70: b        #0x6c3c

; Java_androidx_camera_core_ImageProcessingUtil_nativeRotateYUV
; address=0x6c74 size=2012
0x00006c74: sub      sp, sp, #0xf0
0x00006c78: stp      x29, x30, [sp, #0x90]
0x00006c7c: stp      x28, x27, [sp, #0xa0]
0x00006c80: stp      x26, x25, [sp, #0xb0]
0x00006c84: stp      x24, x23, [sp, #0xc0]
0x00006c88: stp      x22, x21, [sp, #0xd0]
0x00006c8c: stp      x20, x19, [sp, #0xe0]
0x00006c90: ldr      w8, [sp, #0x168]
0x00006c94: ldr      w9, [sp, #0xf0]
0x00006c98: ldr      w21, [sp, #0x160]
0x00006c9c: ldr      w19, [sp, #0x158]
0x00006ca0: str      w8, [sp, #0x8c]
0x00006ca4: ldp      x23, x8, [sp, #0x148]
0x00006ca8: ldr      x26, [sp, #0x140]
0x00006cac: ldr      x27, [sp, #0x128]
0x00006cb0: ldr      x28, [sp, #0x110]
0x00006cb4: stp      x8, x9, [sp, #0x68]
0x00006cb8: ldr      x8, [x0]
0x00006cbc: ldr      x25, [sp, #0xf8]
0x00006cc0: mov      x1, x2
0x00006cc4: stp      x7, x5, [sp, #0x78]
0x00006cc8: ldr      x8, [x8, #0x730]
0x00006ccc: mov      x22, x6
0x00006cd0: mov      x24, x4
0x00006cd4: str      w3, [sp, #0x4c]
0x00006cd8: mov      x20, x0
0x00006cdc: blr      x8
0x00006ce0: ldr      x8, [x20]
0x00006ce4: str      x0, [sp, #0x40]
0x00006ce8: mov      x0, x20
0x00006cec: mov      x1, x24
0x00006cf0: ldr      x8, [x8, #0x730]
0x00006cf4: blr      x8
0x00006cf8: ldr      x8, [x20]
0x00006cfc: mov      x29, x0
0x00006d00: mov      x0, x20
0x00006d04: mov      x1, x22
0x00006d08: ldr      x8, [x8, #0x730]
0x00006d0c: blr      x8
0x00006d10: ldr      x8, [x20]
0x00006d14: mov      x24, x0
0x00006d18: mov      x0, x20
0x00006d1c: mov      x1, x25
0x00006d20: ldr      x8, [x8, #0x730]
0x00006d24: blr      x8
0x00006d28: ldr      x8, [x20]
0x00006d2c: str      x0, [sp, #0x50]
0x00006d30: mov      x0, x20
0x00006d34: mov      x1, x28
0x00006d38: ldr      x8, [x8, #0x730]
0x00006d3c: blr      x8
0x00006d40: ldr      x8, [x20]
0x00006d44: str      x0, [sp, #0x58]
0x00006d48: mov      x0, x20
0x00006d4c: mov      x1, x27
0x00006d50: ldr      x8, [x8, #0x730]
0x00006d54: blr      x8
0x00006d58: ldr      x8, [x20]
0x00006d5c: str      x0, [sp, #0x60]
0x00006d60: add      w25, w19, #1
0x00006d64: add      w9, w21, #1
0x00006d68: ldr      x8, [x8, #0x730]
0x00006d6c: mov      x0, x20
0x00006d70: mov      x1, x26
0x00006d74: asr      w28, w25, #1
0x00006d78: str      w21, [sp, #0x88]
0x00006d7c: asr      w22, w9, #1
0x00006d80: blr      x8
0x00006d84: ldr      x8, [x20]
0x00006d88: mov      x26, x0
0x00006d8c: mov      x0, x20
0x00006d90: mov      x1, x23
0x00006d94: ldr      x8, [x8, #0x730]
0x00006d98: blr      x8
0x00006d9c: ldr      x8, [x20]
0x00006da0: ldr      x1, [sp, #0x68]
0x00006da4: mov      x23, x0
0x00006da8: mov      x0, x20
0x00006dac: ldr      x8, [x8, #0x730]
0x00006db0: blr      x8
0x00006db4: ldr      w11, [sp, #0x8c]
0x00006db8: mov      x20, x0
0x00006dbc: cmp      w11, #0x10e
0x00006dc0: b.eq     #0x6dec
0x00006dc4: cmp      w11, #0xb4
0x00006dc8: b.eq     #0x6df8
0x00006dcc: ldr      w10, [sp, #0x88]
0x00006dd0: ldp      x5, x3, [sp, #0x78]
0x00006dd4: ldr      x12, [sp, #0x70]
0x00006dd8: cmp      w11, #0x5a
0x00006ddc: b.ne     #0x6e10
0x00006de0: mov      w9, wzr
0x00006de4: mov      w8, #1
0x00006de8: b        #0x6e1c
0x00006dec: mov      w8, wzr
0x00006df0: mov      w9, #1
0x00006df4: b        #0x6e00
0x00006df8: mov      w8, wzr
0x00006dfc: mov      w9, wzr
0x00006e00: ldr      w10, [sp, #0x88]
0x00006e04: ldp      x5, x3, [sp, #0x78]
0x00006e08: ldr      x12, [sp, #0x70]
0x00006e0c: b        #0x6e1c
0x00006e10: mov      w8, wzr
0x00006e14: mov      w9, wzr
0x00006e18: mov      w11, wzr
0x00006e1c: orr      w8, w8, w9
0x00006e20: cmp      w8, #0
0x00006e24: csel     w27, w10, w19, ne
0x00006e28: csel     w21, w22, w28, ne
0x00006e2c: csel     w9, w19, w10, ne
0x00006e30: csel     w8, w28, w22, ne
0x00006e34: cmp      w12, #1
0x00006e38: str      w8, [sp, #0x68]
0x00006e3c: b.ne     #0x6e80
0x00006e40: ldr      x0, [sp, #0x40]
0x00006e44: ldr      w1, [sp, #0x4c]
0x00006e48: mov      x2, x29
0x00006e4c: mov      x4, x24
0x00006e50: mov      x6, x26
; ... truncated after 120 instructions

