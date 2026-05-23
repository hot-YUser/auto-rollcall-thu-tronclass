; Selected ARM64 disassembly for libsqlcipher.so
; This is assembly-level recovery, not original C/C++ source.

; _ZN9sqlcipher7compileEP7_JNIEnvP8_jobjectP7sqlite3P8_jstring
; sqlcipher::compile(_JNIEnv*, _jobject*, sqlite3*, _jstring*)
; address=0x1ad4f0 size=444
0x001ad4f0: sub      sp, sp, #0x60
0x001ad4f4: stp      x26, x25, [sp, #0x10]
0x001ad4f8: stp      x24, x23, [sp, #0x20]
0x001ad4fc: stp      x22, x21, [sp, #0x30]
0x001ad500: stp      x20, x19, [sp, #0x40]
0x001ad504: stp      x29, x30, [sp, #0x50]
0x001ad508: add      x29, sp, #0x50
0x001ad50c: mrs      x25, tpidr_el0
0x001ad510: ldr      x8, [x25, #0x28]
0x001ad514: adrp     x26, #0x342000
0x001ad518: mov      x20, x2
0x001ad51c: mov      x21, x3
0x001ad520: str      x8, [sp, #8]
0x001ad524: ldr      x8, [x0]
0x001ad528: ldr      x2, [x26, #0x370]
0x001ad52c: mov      x19, x0
0x001ad530: mov      x22, x1
0x001ad534: ldr      x8, [x8, #0x328]
0x001ad538: blr      x8
0x001ad53c: str      x0, [sp]
0x001ad540: cbz      x0, #0x1ad564
0x001ad544: bl       #0x4ae70
0x001ad548: ldr      x8, [x19]
0x001ad54c: ldr      x2, [x26, #0x370]
0x001ad550: mov      x0, x19
0x001ad554: mov      x1, x22
0x001ad558: ldr      x8, [x8, #0x370]
0x001ad55c: mov      x3, xzr
0x001ad560: blr      x8
0x001ad564: ldr      x8, [x19]
0x001ad568: mov      x0, x19
0x001ad56c: mov      x1, x21
0x001ad570: mov      x2, xzr
0x001ad574: ldr      x8, [x8, #0x528]
0x001ad578: blr      x8
0x001ad57c: ldr      x8, [x19]
0x001ad580: mov      x23, x0
0x001ad584: mov      x0, x19
0x001ad588: mov      x1, x21
0x001ad58c: ldr      x8, [x8, #0x520]
0x001ad590: blr      x8
0x001ad594: lsl      w2, w0, #1
0x001ad598: mov      x3, sp
0x001ad59c: mov      x0, x20
0x001ad5a0: mov      x1, x23
0x001ad5a4: mov      x4, xzr
0x001ad5a8: bl       #0x4a170
0x001ad5ac: ldr      x8, [x19]
0x001ad5b0: mov      w24, w0
0x001ad5b4: mov      x0, x19
0x001ad5b8: mov      x1, x21
0x001ad5bc: ldr      x8, [x8, #0x530]
0x001ad5c0: mov      x2, x23
0x001ad5c4: blr      x8
0x001ad5c8: cbz      w24, #0x1ad65c
0x001ad5cc: ldr      x8, [x19]
0x001ad5d0: mov      x0, x19
0x001ad5d4: mov      x1, x21
0x001ad5d8: mov      x2, xzr
0x001ad5dc: ldr      x8, [x8, #0x548]
0x001ad5e0: blr      x8
0x001ad5e4: mov      x22, x0
0x001ad5e8: bl       #0x4a540
0x001ad5ec: add      x0, x0, #0x32
0x001ad5f0: bl       #0x4a410
0x001ad5f4: mov      x23, x0
0x001ad5f8: cbz      x0, #0x1ad624
0x001ad5fc: adrp     x8, #0x2cb000
0x001ad600: add      x8, x8, #0xb9c
0x001ad604: ldr      q0, [x8]
0x001ad608: mov      w8, #0x3a67
0x001ad60c: movk     w8, #0x20, lsl #16
0x001ad610: mov      x0, x23
0x001ad614: mov      x1, x22
0x001ad618: str      w8, [x23, #0x10]
0x001ad61c: str      q0, [x23]
0x001ad620: bl       #0x4ac90
0x001ad624: ldr      x8, [x19]
0x001ad628: mov      x0, x19
0x001ad62c: mov      x1, x21
0x001ad630: mov      x2, x22
0x001ad634: ldr      x8, [x8, #0x550]
0x001ad638: blr      x8
0x001ad63c: mov      x0, x19
0x001ad640: mov      x1, x20
0x001ad644: mov      x2, x23
0x001ad648: bl       #0x4ac20
0x001ad64c: mov      x0, x23
0x001ad650: bl       #0x4a380
0x001ad654: mov      x0, xzr
0x001ad658: b        #0x1ad67c
0x001ad65c: ldr      x8, [x19]
0x001ad660: ldr      x2, [x26, #0x370]
0x001ad664: ldr      x3, [sp]
0x001ad668: mov      x0, x19
0x001ad66c: ldr      x8, [x8, #0x370]
0x001ad670: mov      x1, x22
0x001ad674: blr      x8
0x001ad678: ldr      x0, [sp]
0x001ad67c: ldr      x8, [x25, #0x28]
0x001ad680: ldr      x9, [sp, #8]
0x001ad684: cmp      x8, x9
0x001ad688: b.ne     #0x1ad6a8
0x001ad68c: ldp      x29, x30, [sp, #0x50]
0x001ad690: ldp      x20, x19, [sp, #0x40]
0x001ad694: ldp      x22, x21, [sp, #0x30]
0x001ad698: ldp      x24, x23, [sp, #0x20]
0x001ad69c: ldp      x26, x25, [sp, #0x10]
0x001ad6a0: add      sp, sp, #0x60
0x001ad6a4: ret      
0x001ad6a8: bl       #0x4afd0

; _ZN9sqlcipher10native_keyEP7_JNIEnvP8_jobjectP11_jbyteArray
; sqlcipher::native_key(_JNIEnv*, _jobject*, _jbyteArray*)
; address=0x1ada70 size=232
0x001ada70: sub      sp, sp, #0x50
0x001ada74: str      x23, [sp, #0x10]
0x001ada78: stp      x22, x21, [sp, #0x20]
0x001ada7c: stp      x20, x19, [sp, #0x30]
0x001ada80: stp      x29, x30, [sp, #0x40]
0x001ada84: add      x29, sp, #0x40
0x001ada88: mrs      x23, tpidr_el0
0x001ada8c: ldr      x8, [x23, #0x28]
0x001ada90: adrp     x9, #0x342000
0x001ada94: mov      x19, x2
0x001ada98: mov      x20, x0
0x001ada9c: str      x8, [sp, #8]
0x001adaa0: ldr      x8, [x0]
0x001adaa4: ldr      x2, [x9, #0x380]
0x001adaa8: ldr      x8, [x8, #0x328]
0x001adaac: blr      x8
0x001adab0: ldr      x8, [x20]
0x001adab4: mov      x22, x0
0x001adab8: mov      x0, x20
0x001adabc: mov      x1, x19
0x001adac0: ldr      x8, [x8, #0x5c0]
0x001adac4: mov      x2, xzr
0x001adac8: blr      x8
0x001adacc: ldr      x8, [x20]
0x001adad0: mov      x21, x0
0x001adad4: mov      x0, x20
0x001adad8: mov      x1, x19
0x001adadc: ldr      x8, [x8, #0x558]
0x001adae0: blr      x8
0x001adae4: cbz      x21, #0x1adb0c
0x001adae8: mov      w2, w0
0x001adaec: cbz      w0, #0x1adb0c
0x001adaf0: mov      x0, x22
0x001adaf4: mov      x1, x21
0x001adaf8: bl       #0x4a490
0x001adafc: cbz      w0, #0x1adb0c
0x001adb00: mov      x0, x20
0x001adb04: mov      x1, x22
0x001adb08: bl       #0x4a660
0x001adb0c: cbz      x21, #0x1adb2c
0x001adb10: ldr      x8, [x20]
0x001adb14: mov      w3, #2
0x001adb18: mov      x0, x20
0x001adb1c: mov      x1, x19
0x001adb20: ldr      x8, [x8, #0x600]
0x001adb24: mov      x2, x21
0x001adb28: blr      x8
0x001adb2c: ldr      x8, [x23, #0x28]
0x001adb30: ldr      x9, [sp, #8]
0x001adb34: cmp      x8, x9
0x001adb38: b.ne     #0x1adb54
0x001adb3c: ldp      x29, x30, [sp, #0x40]
0x001adb40: ldp      x20, x19, [sp, #0x30]
0x001adb44: ldp      x22, x21, [sp, #0x20]
0x001adb48: ldr      x23, [sp, #0x10]
0x001adb4c: add      sp, sp, #0x50
0x001adb50: ret      
0x001adb54: bl       #0x4afd0

; _ZN9sqlcipher12native_rekeyEP7_JNIEnvP8_jobjectP11_jbyteArray
; sqlcipher::native_rekey(_JNIEnv*, _jobject*, _jbyteArray*)
; address=0x1adb58 size=232
0x001adb58: sub      sp, sp, #0x50
0x001adb5c: str      x23, [sp, #0x10]
0x001adb60: stp      x22, x21, [sp, #0x20]
0x001adb64: stp      x20, x19, [sp, #0x30]
0x001adb68: stp      x29, x30, [sp, #0x40]
0x001adb6c: add      x29, sp, #0x40
0x001adb70: mrs      x23, tpidr_el0
0x001adb74: ldr      x8, [x23, #0x28]
0x001adb78: adrp     x9, #0x342000
0x001adb7c: mov      x19, x2
0x001adb80: mov      x20, x0
0x001adb84: str      x8, [sp, #8]
0x001adb88: ldr      x8, [x0]
0x001adb8c: ldr      x2, [x9, #0x380]
0x001adb90: ldr      x8, [x8, #0x328]
0x001adb94: blr      x8
0x001adb98: ldr      x8, [x20]
0x001adb9c: mov      x22, x0
0x001adba0: mov      x0, x20
0x001adba4: mov      x1, x19
0x001adba8: ldr      x8, [x8, #0x5c0]
0x001adbac: mov      x2, xzr
0x001adbb0: blr      x8
0x001adbb4: ldr      x8, [x20]
0x001adbb8: mov      x21, x0
0x001adbbc: mov      x0, x20
0x001adbc0: mov      x1, x19
0x001adbc4: ldr      x8, [x8, #0x558]
0x001adbc8: blr      x8
0x001adbcc: cbz      x21, #0x1adbf4
0x001adbd0: mov      w2, w0
0x001adbd4: cbz      w0, #0x1adbf4
0x001adbd8: mov      x0, x22
0x001adbdc: mov      x1, x21
0x001adbe0: bl       #0x4aec0
0x001adbe4: cbz      w0, #0x1adbf4
0x001adbe8: mov      x0, x20
0x001adbec: mov      x1, x22
0x001adbf0: bl       #0x4a660
0x001adbf4: cbz      x21, #0x1adc14
0x001adbf8: ldr      x8, [x20]
0x001adbfc: mov      w3, #2
0x001adc00: mov      x0, x20
0x001adc04: mov      x1, x19
0x001adc08: ldr      x8, [x8, #0x600]
0x001adc0c: mov      x2, x21
0x001adc10: blr      x8
0x001adc14: ldr      x8, [x23, #0x28]
0x001adc18: ldr      x9, [sp, #8]
0x001adc1c: cmp      x8, x9
0x001adc20: b.ne     #0x1adc3c
0x001adc24: ldp      x29, x30, [sp, #0x40]
0x001adc28: ldp      x20, x19, [sp, #0x30]
0x001adc2c: ldp      x22, x21, [sp, #0x20]
0x001adc30: ldr      x23, [sp, #0x10]
0x001adc34: add      sp, sp, #0x50
0x001adc38: ret      
0x001adc3c: bl       #0x4afd0

; _ZN9sqlcipher16native_key_mutf8EP7_JNIEnvP8_jobjectP11_jcharArray
; sqlcipher::native_key_mutf8(_JNIEnv*, _jobject*, _jcharArray*)
; address=0x1adc40 size=340
0x001adc40: sub      sp, sp, #0x60
0x001adc44: str      x25, [sp, #0x10]
0x001adc48: stp      x24, x23, [sp, #0x20]
0x001adc4c: stp      x22, x21, [sp, #0x30]
0x001adc50: stp      x20, x19, [sp, #0x40]
0x001adc54: stp      x29, x30, [sp, #0x50]
0x001adc58: add      x29, sp, #0x50
0x001adc5c: mrs      x25, tpidr_el0
0x001adc60: ldr      x8, [x25, #0x28]
0x001adc64: adrp     x9, #0x342000
0x001adc68: mov      x20, x2
0x001adc6c: mov      x19, x0
0x001adc70: str      x8, [sp, #8]
0x001adc74: ldr      x8, [x0]
0x001adc78: ldr      x2, [x9, #0x380]
0x001adc7c: ldr      x8, [x8, #0x328]
0x001adc80: blr      x8
0x001adc84: ldr      x8, [x19]
0x001adc88: mov      x21, x0
0x001adc8c: mov      x0, x19
0x001adc90: mov      x1, x20
0x001adc94: ldr      x8, [x8, #0x558]
0x001adc98: blr      x8
0x001adc9c: ldr      x8, [x19]
0x001adca0: mov      w23, w0
0x001adca4: add      x2, sp, #4
0x001adca8: mov      x0, x19
0x001adcac: ldr      x8, [x8, #0x5c8]
0x001adcb0: mov      x1, x20
0x001adcb4: blr      x8
0x001adcb8: ldr      x8, [x19]
0x001adcbc: mov      x22, x0
0x001adcc0: mov      x0, x19
0x001adcc4: mov      x1, x22
0x001adcc8: ldr      x8, [x8, #0x518]
0x001adccc: mov      w2, w23
0x001adcd0: blr      x8
0x001adcd4: ldr      x8, [x19]
0x001adcd8: mov      x23, x0
0x001adcdc: mov      x0, x19
0x001adce0: mov      x1, x23
0x001adce4: ldr      x8, [x8, #0x548]
0x001adce8: mov      x2, xzr
0x001adcec: blr      x8
0x001adcf0: ldr      x8, [x19]
0x001adcf4: mov      x24, x0
0x001adcf8: mov      x0, x19
0x001adcfc: mov      x1, x23
0x001add00: ldr      x8, [x8, #0x540]
0x001add04: blr      x8
0x001add08: cmp      w0, #1
0x001add0c: b.lt     #0x1add30
0x001add10: mov      w2, w0
0x001add14: mov      x0, x21
0x001add18: mov      x1, x24
0x001add1c: bl       #0x4a490
0x001add20: cbz      w0, #0x1add30
0x001add24: mov      x0, x19
0x001add28: mov      x1, x21
0x001add2c: bl       #0x4a660
0x001add30: ldr      x8, [x19]
0x001add34: mov      w3, #2
0x001add38: mov      x0, x19
0x001add3c: mov      x1, x20
0x001add40: ldr      x8, [x8, #0x608]
0x001add44: mov      x2, x22
0x001add48: blr      x8
0x001add4c: ldr      x8, [x19]
0x001add50: mov      x0, x19
0x001add54: mov      x1, x23
0x001add58: mov      x2, x24
0x001add5c: ldr      x8, [x8, #0x550]
0x001add60: blr      x8
0x001add64: ldr      x8, [x25, #0x28]
0x001add68: ldr      x9, [sp, #8]
0x001add6c: cmp      x8, x9
0x001add70: b.ne     #0x1add90
0x001add74: ldp      x29, x30, [sp, #0x50]
0x001add78: ldp      x20, x19, [sp, #0x40]
0x001add7c: ldp      x22, x21, [sp, #0x30]
0x001add80: ldp      x24, x23, [sp, #0x20]
0x001add84: ldr      x25, [sp, #0x10]
0x001add88: add      sp, sp, #0x60
0x001add8c: ret      
0x001add90: bl       #0x4afd0

; _ZN9sqlcipher17native_rawExecSQLEP7_JNIEnvP8_jobjectP8_jstring
; sqlcipher::native_rawExecSQL(_JNIEnv*, _jobject*, _jstring*)
; address=0x1add94 size=208
0x001add94: sub      sp, sp, #0x50
0x001add98: stp      x24, x23, [sp, #0x10]
0x001add9c: stp      x22, x21, [sp, #0x20]
0x001adda0: stp      x20, x19, [sp, #0x30]
0x001adda4: stp      x29, x30, [sp, #0x40]
0x001adda8: add      x29, sp, #0x40
0x001addac: mrs      x24, tpidr_el0
0x001addb0: ldr      x8, [x24, #0x28]
0x001addb4: adrp     x9, #0x342000
0x001addb8: mov      x21, x2
0x001addbc: mov      x19, x0
0x001addc0: str      x8, [sp, #8]
0x001addc4: ldr      x8, [x0]
0x001addc8: ldr      x2, [x9, #0x380]
0x001addcc: ldr      x8, [x8, #0x328]
0x001addd0: blr      x8
0x001addd4: ldr      x8, [x19]
0x001addd8: mov      x20, x0
0x001adddc: mov      x0, x19
0x001adde0: mov      x1, x21
0x001adde4: ldr      x8, [x8, #0x548]
0x001adde8: mov      x2, xzr
0x001addec: blr      x8
0x001addf0: mov      x22, x0
0x001addf4: mov      x0, x20
0x001addf8: mov      x1, x22
0x001addfc: mov      x2, xzr
0x001ade00: mov      x3, xzr
0x001ade04: mov      x4, xzr
0x001ade08: bl       #0x4a2c0
0x001ade0c: ldr      x8, [x19]
0x001ade10: mov      w23, w0
0x001ade14: mov      x0, x19
0x001ade18: mov      x1, x21
0x001ade1c: ldr      x8, [x8, #0x550]
0x001ade20: mov      x2, x22
0x001ade24: blr      x8
0x001ade28: cbz      w23, #0x1ade38
0x001ade2c: mov      x0, x19
0x001ade30: mov      x1, x20
0x001ade34: bl       #0x4a660
0x001ade38: ldr      x8, [x24, #0x28]
0x001ade3c: ldr      x9, [sp, #8]
0x001ade40: cmp      x8, x9
0x001ade44: b.ne     #0x1ade60
0x001ade48: ldp      x29, x30, [sp, #0x40]
0x001ade4c: ldp      x20, x19, [sp, #0x30]
0x001ade50: ldp      x22, x21, [sp, #0x20]
0x001ade54: ldp      x24, x23, [sp, #0x10]
0x001ade58: add      sp, sp, #0x50
0x001ade5c: ret      
0x001ade60: bl       #0x4afd0

; _ZN9sqlcipher6dbopenEP7_JNIEnvP8_jobjectP8_jstringi
; sqlcipher::dbopen(_JNIEnv*, _jobject*, _jstring*, int)
; address=0x1ade64 size=716
0x001ade64: sub      sp, sp, #0x90
0x001ade68: str      x27, [sp, #0x30]
0x001ade6c: stp      x26, x25, [sp, #0x40]
0x001ade70: stp      x24, x23, [sp, #0x50]
0x001ade74: stp      x22, x21, [sp, #0x60]
0x001ade78: stp      x20, x19, [sp, #0x70]
0x001ade7c: stp      x29, x30, [sp, #0x80]
0x001ade80: add      x29, sp, #0x80
0x001ade84: mrs      x26, tpidr_el0
0x001ade88: ldr      x8, [x26, #0x28]
0x001ade8c: mov      x19, x2
0x001ade90: mov      x22, x1
0x001ade94: mov      x1, x2
0x001ade98: str      x8, [sp, #0x28]
0x001ade9c: str      xzr, [sp, #8]
0x001adea0: ldr      x8, [x0]
0x001adea4: mov      x2, xzr
0x001adea8: mov      w23, w3
0x001adeac: mov      x20, x0
0x001adeb0: ldr      x8, [x8, #0x548]
0x001adeb4: blr      x8
0x001adeb8: adrp     x27, #0x342000
0x001adebc: ldrb     w8, [x27, #0x388]
0x001adec0: mov      x21, x0
0x001adec4: tbnz     w8, #0, #0x1adf14
0x001adec8: mov      x0, x21
0x001adecc: bl       #0x4a540
0x001aded0: mov      x8, #0x100000000
0x001aded4: add      x8, x8, x0, lsl #32
0x001aded8: mov      x24, x0
0x001adedc: asr      x0, x8, #0x20
0x001adee0: bl       #0x4a410
0x001adee4: sxtw     x24, w24
0x001adee8: mov      x1, x21
0x001adeec: mov      x2, x24
0x001adef0: mov      x25, x0
0x001adef4: bl       #0x4a180
0x001adef8: adrp     x1, #0x1ae000
0x001adefc: strb     wzr, [x0, x24]
0x001adf00: add      x1, x1, #0x63c
0x001adf04: mov      w0, #0x10
0x001adf08: mov      x2, x25
0x001adf0c: bl       #0x4a280
0x001adf10: cbz      w0, #0x1adf28
0x001adf14: tbnz     w23, #0x1c, #0x1adf34
0x001adf18: tst      w23, #1
0x001adf1c: mov      w8, #1
0x001adf20: cinc     w23, w8, eq
0x001adf24: b        #0x1adf38
0x001adf28: mov      w8, #1
0x001adf2c: strb     w8, [x27, #0x388]
0x001adf30: tbz      w23, #0x1c, #0x1adf18
0x001adf34: mov      w23, #6
0x001adf38: add      x1, sp, #8
0x001adf3c: mov      x0, x21
0x001adf40: mov      w2, w23
0x001adf44: mov      x3, xzr
0x001adf48: bl       #0x4af60
0x001adf4c: cbz      w0, #0x1adfcc
0x001adf50: mov      w24, w0
0x001adf54: cmp      w0, #0x65
0x001adf58: b.ne     #0x1ae028
0x001adf5c: adrp     x1, #0x2cb000
0x001adf60: adrp     x2, #0x2cb000
0x001adf64: add      x1, x1, #0xda0
0x001adf68: add      x2, x2, #0xc49
0x001adf6c: mov      x0, x20
0x001adf70: bl       #0x4a320
0x001adf74: cbz      x21, #0x1adf90
0x001adf78: ldr      x8, [x20]
0x001adf7c: mov      x0, x20
0x001adf80: mov      x1, x19
0x001adf84: mov      x2, x21
0x001adf88: ldr      x8, [x8, #0x550]
0x001adf8c: blr      x8
0x001adf90: ldr      x0, [sp, #8]
0x001adf94: cbz      x0, #0x1adf9c
0x001adf98: bl       #0x4a8b0
0x001adf9c: ldr      x8, [x26, #0x28]
0x001adfa0: ldr      x9, [sp, #0x28]
0x001adfa4: cmp      x8, x9
0x001adfa8: b.ne     #0x1ae12c
0x001adfac: ldp      x29, x30, [sp, #0x80]
0x001adfb0: ldp      x20, x19, [sp, #0x70]
0x001adfb4: ldp      x22, x21, [sp, #0x60]
0x001adfb8: ldp      x24, x23, [sp, #0x50]
0x001adfbc: ldp      x26, x25, [sp, #0x40]
0x001adfc0: ldr      x27, [sp, #0x30]
0x001adfc4: add      sp, sp, #0x90
0x001adfc8: ret      
0x001adfcc: tbz      w23, #1, #0x1ae05c
0x001adfd0: ldr      x0, [sp, #8]
0x001adfd4: mov      x1, xzr
0x001adfd8: bl       #0x4a9e0
0x001adfdc: cbz      w0, #0x1ae05c
0x001adfe0: ldr      x22, [sp, #8]
0x001adfe4: cbz      x22, #0x1ae108
0x001adfe8: mov      x0, x22
0x001adfec: bl       #0x4a6a0
0x001adff0: cbz      w0, #0x1ae108
0x001adff4: mov      x0, x22
0x001adff8: bl       #0x4a6a0
0x001adffc: mov      w23, w0
0x001ae000: mov      x0, x22
0x001ae004: bl       #0x4a730
0x001ae008: adrp     x3, #0x2cb000
0x001ae00c: mov      x2, x0
0x001ae010: add      x3, x3, #0xc61
0x001ae014: mov      x0, x20
0x001ae018: mov      w1, w23
0x001ae01c: bl       #0x4a910
0x001ae020: cbnz     x21, #0x1adf78
0x001ae024: b        #0x1adf90
0x001ae028: adrp     x1, #0x2be000
0x001ae02c: add      x1, x1, #0xfe
0x001ae030: add      x0, sp, #0x10
0x001ae034: mov      w2, w24
0x001ae038: bl       #0x4a470
0x001ae03c: adrp     x3, #0x2cb000
0x001ae040: add      x3, x3, #0xc49
; ... truncated after 120 instructions

; _ZN9sqlcipher40register_android_database_SQLiteDatabaseEP7_JNIEnv
; sqlcipher::register_android_database_SQLiteDatabase(_JNIEnv*)
; address=0x1ae274 size=208
0x001ae274: sub      sp, sp, #0x40
0x001ae278: str      x21, [sp, #0x10]
0x001ae27c: stp      x20, x19, [sp, #0x20]
0x001ae280: stp      x29, x30, [sp, #0x30]
0x001ae284: add      x29, sp, #0x30
0x001ae288: mrs      x21, tpidr_el0
0x001ae28c: ldr      x8, [x21, #0x28]
0x001ae290: adrp     x1, #0x2cb000
0x001ae294: add      x1, x1, #0xcac
0x001ae298: mov      x19, x0
0x001ae29c: str      x8, [sp, #8]
0x001ae2a0: ldr      x8, [x0]
0x001ae2a4: ldr      x8, [x8, #0x30]
0x001ae2a8: blr      x8
0x001ae2ac: cbz      x0, #0x1ae318
0x001ae2b0: ldr      x8, [x19]
0x001ae2b4: mov      x20, x0
0x001ae2b8: adrp     x2, #0x2cb000
0x001ae2bc: adrp     x3, #0x2cb000
0x001ae2c0: ldr      x8, [x8, #0x2f0]
0x001ae2c4: add      x2, x2, #0xcd2
0x001ae2c8: add      x3, x3, #0xeb3
0x001ae2cc: mov      x0, x19
0x001ae2d0: mov      x1, x20
0x001ae2d4: blr      x8
0x001ae2d8: adrp     x8, #0x342000
0x001ae2dc: str      x0, [x8, #0x380]
0x001ae2e0: cbz      x0, #0x1ae318
0x001ae2e4: ldr      x8, [x19]
0x001ae2e8: adrp     x2, #0x340000
0x001ae2ec: add      x2, x2, #0x3f8
0x001ae2f0: mov      w3, #0xe
0x001ae2f4: ldr      x8, [x8, #0x6b8]
0x001ae2f8: mov      x0, x19
0x001ae2fc: mov      x1, x20
0x001ae300: blr      x8
0x001ae304: ldr      x8, [x21, #0x28]
0x001ae308: ldr      x9, [sp, #8]
0x001ae30c: cmp      x8, x9
0x001ae310: b.eq     #0x1ae32c
0x001ae314: b        #0x1ae340
0x001ae318: ldr      x8, [x21, #0x28]
0x001ae31c: ldr      x9, [sp, #8]
0x001ae320: cmp      x8, x9
0x001ae324: b.ne     #0x1ae340
0x001ae328: mov      w0, #-1
0x001ae32c: ldp      x29, x30, [sp, #0x30]
0x001ae330: ldp      x20, x19, [sp, #0x20]
0x001ae334: ldr      x21, [sp, #0x10]
0x001ae338: add      sp, sp, #0x40
0x001ae33c: ret      
0x001ae340: bl       #0x4afd0

; JNI_OnLoad
; address=0x1ae344 size=276
0x001ae344: sub      sp, sp, #0x40
0x001ae348: stp      x22, x21, [sp, #0x10]
0x001ae34c: stp      x20, x19, [sp, #0x20]
0x001ae350: stp      x29, x30, [sp, #0x30]
0x001ae354: add      x29, sp, #0x30
0x001ae358: mrs      x22, tpidr_el0
0x001ae35c: ldr      x8, [x22, #0x28]
0x001ae360: mov      w2, #2
0x001ae364: mov      w19, #2
0x001ae368: mov      x1, sp
0x001ae36c: str      x8, [sp, #8]
0x001ae370: ldr      x8, [x0]
0x001ae374: movk     w2, #1, lsl #16
0x001ae378: movk     w19, #1, lsl #16
0x001ae37c: ldr      x8, [x8, #0x30]
0x001ae380: blr      x8
0x001ae384: cbz      w0, #0x1ae390
0x001ae388: mov      w19, #-1
0x001ae38c: b        #0x1ae42c
0x001ae390: ldr      x20, [sp]
0x001ae394: adrp     x1, #0x2cb000
0x001ae398: add      x1, x1, #0xcac
0x001ae39c: ldr      x8, [x20]
0x001ae3a0: mov      x0, x20
0x001ae3a4: ldr      x8, [x8, #0x30]
0x001ae3a8: blr      x8
0x001ae3ac: cbz      x0, #0x1ae404
0x001ae3b0: ldr      x8, [x20]
0x001ae3b4: mov      x21, x0
0x001ae3b8: adrp     x2, #0x2cb000
0x001ae3bc: adrp     x3, #0x2cb000
0x001ae3c0: ldr      x8, [x8, #0x2f0]
0x001ae3c4: add      x2, x2, #0xcd2
0x001ae3c8: add      x3, x3, #0xeb3
0x001ae3cc: mov      x0, x20
0x001ae3d0: mov      x1, x21
0x001ae3d4: blr      x8
0x001ae3d8: adrp     x8, #0x342000
0x001ae3dc: str      x0, [x8, #0x380]
0x001ae3e0: cbz      x0, #0x1ae404
0x001ae3e4: ldr      x8, [x20]
0x001ae3e8: adrp     x2, #0x340000
0x001ae3ec: add      x2, x2, #0x3f8
0x001ae3f0: mov      w3, #0xe
0x001ae3f4: ldr      x8, [x8, #0x6b8]
0x001ae3f8: mov      x0, x20
0x001ae3fc: mov      x1, x21
0x001ae400: blr      x8
0x001ae404: ldr      x0, [sp]
0x001ae408: bl       #0x4a560
0x001ae40c: ldr      x0, [sp]
0x001ae410: bl       #0x4a4d0
0x001ae414: ldr      x0, [sp]
0x001ae418: bl       #0x4a570
0x001ae41c: ldr      x0, [sp]
0x001ae420: bl       #0x4af10
0x001ae424: ldr      x0, [sp]
0x001ae428: bl       #0x4a520
0x001ae42c: ldr      x8, [x22, #0x28]
0x001ae430: ldr      x9, [sp, #8]
0x001ae434: cmp      x8, x9
0x001ae438: b.ne     #0x1ae454
0x001ae43c: mov      w0, w19
0x001ae440: ldp      x29, x30, [sp, #0x30]
0x001ae444: ldp      x20, x19, [sp, #0x20]
0x001ae448: ldp      x22, x21, [sp, #0x10]
0x001ae44c: add      sp, sp, #0x40
0x001ae450: ret      
0x001ae454: bl       #0x4afd0

