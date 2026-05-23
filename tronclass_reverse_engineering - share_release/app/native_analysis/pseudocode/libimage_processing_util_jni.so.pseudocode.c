/*
 * C-like pseudocode for libimage_processing_util_jni.so
 * This is inferred C-like pseudocode, not original source.
 */

/* 0010630c Java_androidx_camera_core_ImageProcessingUtil_nativeCopyBetweenByteBufferAndBitmap */

int Java_androidx_camera_core_ImageProcessingUtil_nativeCopyBetweenByteBufferAndBitmap
              (long *param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4,
              undefined4 param_5,undefined4 param_6,undefined4 param_7,undefined4 param_8,
              char param_9)

{
  int iVar1;
  undefined8 uVar2;
  undefined8 uVar3;
  undefined8 local_48;
  
  local_48 = 0;
  iVar1 = AndroidBitmap_lockPixels(param_1,param_3,&local_48);
  if (iVar1 == 0) {
    uVar2 = (**(code **)(*param_1 + 0x730))(param_1,param_4);
    uVar3 = local_48;
    if (param_9 != '\0') {
      uVar3 = uVar2;
      uVar2 = local_48;
    }
    iVar1 = FUN_00102990(uVar3,param_5,uVar2,param_6,param_7,param_8);
    if (iVar1 == 0) {
      iVar1 = AndroidBitmap_unlockPixels(param_1,param_3);
      return -(uint)(iVar1 != 0);
    }
  }
  return -1;
}



/* 001063d8 Java_androidx_camera_core_ImageProcessingUtil_nativeShiftPixel */

undefined8
Java_androidx_camera_core_ImageProcessingUtil_nativeShiftPixel
          (long *param_1,undefined8 param_2,undefined8 param_3,int param_4,undefined8 param_5,
          int param_6,undefined8 param_7,int param_8)

{
  void *__dest;
  void *__dest_00;
  void *__dest_01;
  ulong uVar1;
  ulong uVar2;
  int param_11;
  uint param_12;
  int param_13;
  int param_14;
  int param_15;
  
  __dest = (void *)(**(code **)(*param_1 + 0x730))(param_1,param_3);
  __dest_00 = (void *)(**(code **)(*param_1 + 0x730))(param_1,param_5);
  __dest_01 = (void *)(**(code **)(*param_1 + 0x730))(param_1,param_7);
  if (0 < (int)param_12) {
    uVar2 = (ulong)param_12;
    do {
      memmove(__dest,(void *)((long)__dest + (long)param_13),(long)(param_11 + -1));
      uVar2 = uVar2 - 1;
      *(undefined *)((long)__dest + (long)(param_11 - param_13)) =
           *(undefined *)((long)__dest + (long)(param_4 - param_13));
      __dest = (void *)((long)__dest + (long)param_4);
    } while (uVar2 != 0);
    if (1 < (int)param_12) {
      if ((int)param_12 < 0) {
        param_12 = param_12 + 1;
      }
      if (param_11 < 0) {
        param_11 = param_11 + 1;
      }
      param_11 = param_11 >> 1;
      uVar1 = (ulong)(uint)((int)param_12 >> 1);
      uVar2 = uVar1;
      do {
        memmove(__dest_00,(void *)((long)__dest_00 + (long)param_14),(long)(param_11 + -1));
        uVar2 = uVar2 - 1;
        *(undefined *)((long)__dest_00 + (long)(param_11 - param_14)) =
             *(undefined *)((long)__dest_00 + (long)(param_6 - param_14));
        __dest_00 = (void *)((long)__dest_00 + (long)param_6);
      } while (uVar2 != 0);
      do {
        memmove(__dest_01,(void *)((long)__dest_01 + (long)param_15),(long)(param_11 + -1));
        uVar1 = uVar1 - 1;
        *(undefined *)((long)__dest_01 + (long)(param_11 - param_15)) =
             *(undefined *)((long)__dest_01 + (long)(param_8 - param_15));
        __dest_01 = (void *)((long)__dest_01 + (long)param_8);
      } while (uVar1 != 0);
    }
  }
  return 0;
}



/* 00106590 Java_androidx_camera_core_ImageProcessingUtil_nativeWriteJpegToSurface */

undefined8
Java_androidx_camera_core_ImageProcessingUtil_nativeWriteJpegToSurface
          (long *param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  int iVar1;
  int iVar2;
  long lVar3;
  void *__src;
  char *pcVar4;
  undefined auStack_70 [16];
  void *local_60;
  
  lVar3 = ANativeWindow_fromSurface(param_1,param_4);
  if (lVar3 == 0) {
    pcVar4 = "Failed to get ANativeWindow";
  }
  else {
    iVar1 = (**(code **)(*param_1 + 0x558))(param_1,param_3);
    ANativeWindow_setBuffersGeometry(lVar3,iVar1 + 8,1,0x21);
    iVar2 = ANativeWindow_lock(lVar3,auStack_70,0);
    if (iVar2 == 0) {
      __src = (void *)(**(code **)(*param_1 + 0x5c0))(param_1,param_3,0);
      if (__src != (void *)0x0) {
        memcpy(local_60,__src,(long)iVar1);
        *(undefined8 *)((long)local_60 + (long)iVar1) = 0;
        ANativeWindow_unlockAndPost(lVar3);
        ANativeWindow_release(lVar3);
        (**(code **)(*param_1 + 0x600))(param_1,param_3,__src,0);
        return 0;
      }
      ANativeWindow_release(lVar3);
      pcVar4 = "Failed to get JPEG bytes array pointer.";
    }
    else {
      ANativeWindow_release(lVar3);
      pcVar4 = "Failed to lock window.";
    }
  }
  __android_log_print(6,"YuvToRgbJni",pcVar4);
  return 0xffffffff;
}



/* 001066d8 Java_androidx_camera_core_ImageProcessingUtil_nativeConvertAndroid420ToABGR */

/* WARNING: Removing unreachable block (ram,0x00106b4c) */

int Java_androidx_camera_core_ImageProcessingUtil_nativeConvertAndroid420ToABGR
              (long *param_1,undefined8 param_2,undefined8 param_3,int param_4,undefined8 param_5,
              int param_6,undefined8 param_7,int param_8,int param_9,undefined4 param_10,
              int param_11,undefined4 param_12_00,undefined8 param_12,long param_13,int param_14,
              undefined4 param_16_00,int param_15,undefined4 param_18_00,int param_16,
              undefined4 param_20,int param_17,undefined4 param_22,int param_18,undefined4 param_24,
              int param_19)

{
  int iVar1;
  int iVar2;
  int iVar3;
  int iVar4;
  int iVar5;
  long lVar6;
  long lVar7;
  long lVar8;
  long lVar9;
  long lVar10;
  int iVar11;
  undefined auStack_90 [8];
  int local_88;
  int local_84;
  long local_80;
  
  lVar6 = (**(code **)(*param_1 + 0x730))(param_1,param_3);
  lVar7 = (**(code **)(*param_1 + 0x730))(param_1,param_5);
  lVar8 = (**(code **)(*param_1 + 0x730))(param_1,param_7);
  lVar9 = ANativeWindow_fromSurface(param_1,param_12);
  if (lVar9 == 0) {
    return -1;
  }
  iVar4 = ANativeWindow_lock(lVar9,auStack_90,0);
  if ((iVar4 == 0) && (local_84 == 1)) {
    iVar4 = param_19;
    if ((param_19 != 0x10e) && ((param_19 != 0xb4 && (param_19 != 0x5a)))) {
      iVar4 = 0;
    }
    lVar10 = 0;
    if ((param_13 != 0) && (param_19 != 0)) {
      lVar10 = (**(code **)(*param_1 + 0x730))(param_1);
    }
    iVar2 = param_14 << 2;
    iVar1 = iVar2;
    if (param_19 == 0) {
      iVar1 = local_88 << 2;
      lVar10 = local_80;
    }
    if (((param_16 < 1) && (param_17 < 1)) && (param_18 < 1)) {
      iVar5 = FUN_001029e0(lVar6 + param_16,param_4,lVar8 + param_18,param_8,lVar7 + param_17,
                           param_6,param_11,lVar10,iVar1);
      if (iVar5 == 0) {
LAB_00106888:
        if (param_19 != 0) {
          iVar5 = FUN_00104198(lVar10,iVar1,local_80,local_88 << 2,param_14,param_15,iVar4);
        }
      }
    }
    else {
      if (((param_16 != param_9) || (param_17 != param_11)) || (param_18 != param_11)) {
        ANativeWindow_unlockAndPost(lVar9);
        goto LAB_001069d0;
      }
      iVar11 = (int)((long)param_15 + -1);
      iVar5 = FUN_001029e0(lVar6 + param_16,param_4,lVar8 + param_18,param_8,lVar7 + param_17,
                           param_6,param_18,lVar10,iVar1);
      if (iVar5 == 0) {
        iVar5 = (param_15 + -2) * param_6;
        iVar3 = (param_15 + -2) * param_8;
        if (iVar5 < 0) {
          iVar5 = iVar5 + 1;
        }
        if (iVar3 < 0) {
          iVar3 = iVar3 + 1;
        }
        iVar5 = FUN_001029e0(lVar6 + param_16 + (long)iVar11 * (long)param_4,param_4 + -1,
                             lVar8 + param_18 + (long)(iVar3 >> 1),param_8 + -1,
                             lVar7 + param_17 + (long)(iVar5 >> 1),param_6 + -1,param_18,
                             lVar10 + (long)iVar1 * ((long)param_15 + -1),iVar1);
        if (iVar5 == 0) {
          lVar6 = (long)iVar2 + (long)iVar11 * (long)iVar1;
          lVar8 = lVar6 << 0x20;
          lVar6 = lVar6 + lVar10;
          *(undefined *)(lVar10 + (lVar8 + -0x100000000 >> 0x20)) =
               *(undefined *)(lVar10 + (lVar8 + -0x900000000 >> 0x20));
          *(undefined2 *)(lVar6 + -3) = *(undefined2 *)(lVar6 + -0xb);
          *(undefined *)(lVar10 + (lVar8 + -0x400000000 >> 0x20)) =
               *(undefined *)(lVar10 + (lVar8 + -0xc00000000 >> 0x20));
          *(undefined *)(lVar10 + (lVar8 + -0x500000000 >> 0x20)) =
               *(undefined *)(lVar10 + (lVar8 + -0xd00000000 >> 0x20));
          lVar7 = (long)iVar2 + ((long)iVar11 + -1) * (long)iVar1;
          *(undefined2 *)(lVar6 + -7) = *(undefined2 *)(lVar6 + -0xf);
          lVar6 = lVar7 << 0x20;
          *(undefined *)(lVar10 + (lVar8 + -0x800000000 >> 0x20)) =
               *(undefined *)(lVar10 + (lVar8 + -0x1000000000 >> 0x20));
          lVar7 = lVar7 + lVar10;
          *(undefined *)(lVar10 + (lVar6 + -0x100000000 >> 0x20)) =
               *(undefined *)(lVar10 + (lVar6 + -0x900000000 >> 0x20));
          *(undefined2 *)(lVar7 + -3) = *(undefined2 *)(lVar7 + -0xb);
          *(undefined *)(lVar10 + (lVar6 + -0x400000000 >> 0x20)) =
               *(undefined *)(lVar10 + (lVar6 + -0xc00000000 >> 0x20));
          *(undefined *)(lVar10 + (lVar6 + -0x500000000 >> 0x20)) =
               *(undefined *)(lVar10 + (lVar6 + -0xd00000000 >> 0x20));
          *(undefined2 *)(lVar7 + -7) = *(undefined2 *)(lVar7 + -0xf);
          *(undefined *)(lVar10 + (lVar6 + -0x800000000 >> 0x20)) =
               *(undefined *)(lVar10 + (lVar6 + -0x1000000000 >> 0x20));
          goto LAB_00106888;
        }
      }
    }
    ANativeWindow_unlockAndPost(lVar9);
  }
  else {
LAB_001069d0:
    iVar5 = -1;
  }
  ANativeWindow_release(lVar9);
  return iVar5;
}



/* 00106b50 Java_androidx_camera_core_ImageProcessingUtil_nativeConvertAndroid420ToBitmap */

int Java_androidx_camera_core_ImageProcessingUtil_nativeConvertAndroid420ToBitmap
              (long *param_1,undefined8 param_2,undefined8 param_3,undefined4 param_4,
              undefined8 param_5,undefined4 param_6,undefined8 param_7,undefined4 param_8,
              undefined4 param_9,undefined4 param_10,undefined4 param_11,undefined4 param_12_00,
              undefined8 param_12,undefined4 param_13)

{
  int iVar1;
  undefined8 uVar2;
  undefined8 uVar3;
  undefined8 uVar4;
  undefined8 local_68;
  
  local_68 = 0;
  iVar1 = AndroidBitmap_lockPixels(param_1,param_12,&local_68);
  if (iVar1 == 0) {
    uVar2 = (**(code **)(*param_1 + 0x730))(param_1,param_3);
    uVar3 = (**(code **)(*param_1 + 0x730))(param_1,param_5);
    uVar4 = (**(code **)(*param_1 + 0x730))(param_1,param_7);
    iVar1 = FUN_001029e0(uVar2,param_4,uVar4,param_8,uVar3,param_6,param_11,local_68,param_13);
    if (iVar1 == 0) {
      iVar1 = AndroidBitmap_unlockPixels(param_1,param_12);
      return -(uint)(iVar1 != 0);
    }
  }
  return -1;
}



/* 00106c74 Java_androidx_camera_core_ImageProcessingUtil_nativeRotateYUV */

int Java_androidx_camera_core_ImageProcessingUtil_nativeRotateYUV
              (long *param_1,undefined8 param_2,undefined8 param_3,undefined4 param_4,
              undefined8 param_5,undefined8 param_6,undefined8 param_7,undefined8 param_8,
              int param_9,undefined4 param_10,undefined8 param_11,int param_12,
              undefined4 param_13_00,uint param_13,undefined4 param_15_00,undefined8 param_14,
              int param_15,undefined4 param_18_00,uint param_16,undefined4 param_20_00,
              undefined8 param_17,int param_18,undefined4 param_23_00,uint param_19,
              undefined4 param_25,undefined8 param_20,undefined8 param_21,undefined8 param_28,
              uint param_22,undefined4 param_30,uint param_23,undefined4 param_32,int param_24)

{
  undefined *puVar1;
  uint uVar2;
  uint uVar3;
  uint uVar4;
  uint uVar5;
  uint uVar6;
  uint uVar7;
  uint uVar8;
  uint uVar9;
  int iVar10;
  undefined8 uVar11;
  long lVar12;
  long lVar13;
  long lVar14;
  long lVar15;
  long lVar16;
  long lVar17;
  long lVar18;
  long lVar19;
  long lVar20;
  undefined8 *puVar21;
  undefined8 *puVar22;
  void *__ptr;
  long lVar23;
  undefined *puVar24;
  int iVar25;
  ulong uVar26;
  byte bVar27;
  int iVar28;
  ulong uVar29;
  byte bVar30;
  long lVar31;
  ulong uVar32;
  undefined *puVar33;
  ulong uVar34;
  ulong uVar35;
  undefined *puVar36;
  long lVar37;
  undefined8 *puVar38;
  undefined8 *puVar39;
  undefined8 uVar40;
  undefined8 uVar41;
  
  uVar11 = (**(code **)(*param_1 + 0x730))(param_1,param_3);
  lVar12 = (**(code **)(*param_1 + 0x730))(param_1,param_5);
  lVar13 = (**(code **)(*param_1 + 0x730))(param_1,param_7);
  lVar14 = (**(code **)(*param_1 + 0x730))(param_1,param_11);
  lVar15 = (**(code **)(*param_1 + 0x730))(param_1,param_14);
  lVar16 = (**(code **)(*param_1 + 0x730))(param_1,param_17);
  uVar3 = (int)(param_22 + 1) >> 1;
  uVar4 = (int)(param_23 + 1) >> 1;
  lVar17 = (**(code **)(*param_1 + 0x730))(param_1,param_20);
  lVar18 = (**(code **)(*param_1 + 0x730))(param_1,param_21);
  lVar19 = (**(code **)(*param_1 + 0x730))(param_1,param_28);
  if (param_24 == 0x10e) {
    bVar30 = 1;
  }
  else {
    if (param_24 != 0xb4) {
      if (param_24 == 0x5a) {
        bVar30 = 0;
        bVar27 = 1;
      }
      else {
        bVar27 = 0;
        bVar30 = 0;
      }
      goto LAB_00106e1c;
    }
    bVar30 = 0;
  }
  bVar27 = 0;
LAB_00106e1c:
  uVar5 = uVar3;
  uVar7 = uVar4;
  uVar8 = param_23;
  uVar9 = param_22;
  if (!(bool)(bVar27 | bVar30)) {
    uVar5 = uVar4;
    uVar7 = uVar3;
    uVar8 = param_22;
    uVar9 = param_23;
  }
  if (param_9 == 1) {
    iVar10 = FUN_00103278(uVar11,param_4,lVar12,param_6,lVar13,param_8,lVar17,uVar8,lVar18,uVar7);
  }
  else {
    iVar10 = (int)param_6;
    iVar25 = (int)param_8;
    if ((((iVar10 == iVar25) && (param_9 == 2)) &&
        (lVar20 = lVar13, lVar23 = lVar19, lVar31 = lVar18, lVar13 - lVar12 == -1)) ||
       (((iVar10 == iVar25 && (param_9 == 2)) &&
        (lVar20 = lVar12, lVar23 = lVar18, lVar31 = lVar19, lVar13 - lVar12 == 1)))) {
      iVar10 = FUN_00103918(uVar11,param_4,lVar20,param_6,lVar17,uVar8,lVar23,uVar7,lVar31,uVar7);
    }
    else {
      uVar2 = param_22 + 1 & 0xfffffffe;
      __ptr = malloc((long)(int)(uVar4 * uVar2 + 0x3f));
      puVar24 = (undefined *)((long)__ptr + 0x3fU & 0xffffffffffffffc0);
      if (0 < (int)param_23) {
        iVar28 = 0;
        puVar33 = puVar24;
        do {
          if (0 < (int)param_22) {
            lVar20 = 0;
            puVar36 = puVar33;
            uVar6 = uVar3;
            do {
              uVar6 = uVar6 - 1;
              *puVar36 = *(undefined *)(lVar12 + lVar20);
              puVar1 = (undefined *)(lVar13 + lVar20);
              lVar20 = lVar20 + param_9;
              puVar36[1] = *puVar1;
              puVar36 = puVar36 + 2;
            } while (uVar6 != 0);
          }
          iVar28 = iVar28 + 1;
          lVar12 = lVar12 + iVar10;
          lVar13 = lVar13 + iVar25;
          puVar33 = puVar33 + (int)uVar2;
        } while (iVar28 < (int)uVar4);
      }
      iVar10 = FUN_00103918(uVar11,param_4,puVar24,uVar2,lVar17,uVar8,lVar18,uVar7,lVar19,uVar7);
      free(__ptr);
    }
  }
  if (iVar10 == 0) {
    if (0 < (int)uVar9) {
      uVar32 = (ulong)uVar8;
      uVar35 = uVar32 & 0xfffffff8;
      uVar29 = 0;
      lVar31 = (long)(int)uVar8;
      puVar22 = (undefined8 *)(lVar14 + 0x10);
      puVar21 = (undefined8 *)(lVar17 + 0x10);
      uVar34 = uVar32 & 0xffffffe0;
      lVar20 = (long)(int)param_13;
      lVar23 = (long)param_12;
      lVar13 = lVar17;
      lVar12 = lVar14;
      do {
        if (0 < (int)uVar8) {
          if (uVar8 < 8 || param_13 != 1) {
LAB_00106ff0:
            uVar26 = 0;
          }
          else {
            if ((lVar14 + uVar29 * lVar23 < lVar17 + uVar29 * lVar31 + uVar32) &&
               (lVar17 + uVar29 * lVar31 < lVar14 + uVar29 * lVar23 + uVar32)) goto LAB_00106ff0;
            puVar39 = puVar21;
            puVar38 = puVar22;
            uVar26 = uVar34;
            if (uVar8 < 0x20) {
              uVar26 = 0;
LAB_0010705c:
              lVar37 = uVar26 - uVar35;
              puVar39 = (undefined8 *)(lVar12 + lVar20 * uVar26);
              puVar38 = (undefined8 *)(lVar13 + uVar26);
              do {
                lVar37 = lVar37 + 8;
                *puVar39 = *puVar38;
                puVar39 = (undefined8 *)
                          ((long)puVar39 +
                          (-(ulong)(param_13 >> 0x1f) & 0xfffffff800000000 | (ulong)param_13 << 3));
                puVar38 = puVar38 + 1;
              } while (lVar37 != 0);
              uVar26 = uVar35;
              if (uVar35 == uVar32) goto LAB_00106f98;
            }
            else {
              do {
                uVar11 = puVar39[-2];
                uVar41 = puVar39[1];
                uVar40 = *puVar39;
                uVar26 = uVar26 - 0x20;
                puVar38[-1] = puVar39[-1];
                puVar38[-2] = uVar11;
                puVar38[1] = uVar41;
                *puVar38 = uVar40;
                puVar39 = puVar39 + 4;
                puVar38 = (undefined8 *)
                          ((long)puVar38 +
                          (-(ulong)(param_13 >> 0x1f) & 0xffffffe000000000 | (ulong)param_13 << 5));
              } while (uVar26 != 0);
              if (uVar34 == uVar32) goto LAB_00106f98;
              uVar26 = uVar34;
              if ((uVar8 & 0x18) != 0) goto LAB_0010705c;
            }
          }
          lVar37 = lVar20 * uVar26;
          do {
            puVar24 = (undefined *)(lVar13 + uVar26);
            uVar26 = uVar26 + 1;
            *(undefined *)(lVar12 + lVar37) = *puVar24;
            lVar37 = lVar37 + lVar20;
          } while (uVar32 != uVar26);
        }
LAB_00106f98:
        uVar29 = uVar29 + 1;
        puVar22 = (undefined8 *)((long)puVar22 + lVar23);
        puVar21 = (undefined8 *)((long)puVar21 + lVar31);
        lVar12 = lVar12 + lVar23;
        lVar13 = lVar13 + lVar31;
      } while (uVar29 != uVar9);
    }
    if (0 < (int)uVar5) {
      uVar32 = (ulong)uVar7;
      uVar35 = uVar32 & 0xfffffff8;
      uVar29 = 0;
      lVar20 = (long)(int)uVar7;
      puVar22 = (undefined8 *)(lVar15 + 0x10);
      puVar21 = (undefined8 *)(lVar18 + 0x10);
      uVar34 = uVar32 & 0xffffffe0;
      lVar14 = (long)(int)param_16;
      lVar17 = (long)param_15;
      lVar13 = lVar18;
      lVar12 = lVar15;
      do {
        if (0 < (int)uVar7) {
          if (uVar7 < 8 || param_16 != 1) {
LAB_0010715c:
            uVar26 = 0;
          }
          else {
            if ((lVar15 + uVar29 * lVar17 < lVar18 + uVar29 * lVar20 + uVar32) &&
               (lVar18 + uVar29 * lVar20 < lVar15 + uVar29 * lVar17 + uVar32)) goto LAB_0010715c;
            puVar39 = puVar21;
            puVar38 = puVar22;
            uVar26 = uVar34;
            if (uVar7 < 0x20) {
              uVar26 = 0;
LAB_001071c8:
              lVar23 = uVar26 - uVar35;
              puVar39 = (undefined8 *)(lVar12 + lVar14 * uVar26);
              puVar38 = (undefined8 *)(lVar13 + uVar26);
              do {
                lVar23 = lVar23 + 8;
                *puVar39 = *puVar38;
                puVar39 = (undefined8 *)
                          ((long)puVar39 +
                          (-(ulong)(param_16 >> 0x1f) & 0xfffffff800000000 | (ulong)param_16 << 3));
                puVar38 = puVar38 + 1;
              } while (lVar23 != 0);
              uVar26 = uVar35;
              if (uVar35 == uVar32) goto LAB_00107104;
            }
            else {
              do {
                uVar11 = puVar39[-2];
                uVar41 = puVar39[1];
                uVar40 = *puVar39;
                uVar26 = uVar26 - 0x20;
                puVar38[-1] = puVar39[-1];
                puVar38[-2] = uVar11;
                puVar38[1] = uVar41;
                *puVar38 = uVar40;
                puVar39 = puVar39 + 4;
                puVar38 = (undefined8 *)
                          ((long)puVar38 +
                          (-(ulong)(param_16 >> 0x1f) & 0xffffffe000000000 | (ulong)param_16 << 5));
              } while (uVar26 != 0);
              if (uVar34 == uVar32) goto LAB_00107104;
              uVar26 = uVar34;
              if ((uVar7 & 0x18) != 0) goto LAB_001071c8;
            }
          }
          lVar23 = lVar14 * uVar26;
          do {
            puVar24 = (undefined *)(lVar13 + uVar26);
            uVar26 = uVar26 + 1;
            *(undefined *)(lVar12 + lVar23) = *puVar24;
            lVar23 = lVar23 + lVar14;
          } while (uVar32 != uVar26);
        }
LAB_00107104:
        uVar29 = uVar29 + 1;
        puVar22 = (undefined8 *)((long)puVar22 + lVar17);
        puVar21 = (undefined8 *)((long)puVar21 + lVar20);
        lVar12 = lVar12 + lVar17;
        lVar13 = lVar13 + lVar20;
      } while (uVar29 != uVar5);
      uVar29 = 0;
      lVar15 = (long)(int)param_19;
      lVar14 = (long)param_18;
      puVar22 = (undefined8 *)(lVar16 + 0x10);
      puVar21 = (undefined8 *)(lVar19 + 0x10);
      lVar13 = lVar19;
      lVar12 = lVar16;
      do {
        if (0 < (int)uVar7) {
          if (uVar7 < 8 || param_19 != 1) {
LAB_00107294:
            uVar26 = 0;
          }
          else {
            if ((lVar16 + uVar29 * lVar14 < lVar19 + uVar29 * lVar20 + uVar32) &&
               (lVar19 + uVar29 * lVar20 < lVar16 + uVar29 * lVar14 + uVar32)) goto LAB_00107294;
            puVar39 = puVar21;
            puVar38 = puVar22;
            uVar26 = uVar34;
            if (uVar7 < 0x20) {
              uVar26 = 0;
LAB_00107300:
              lVar17 = uVar26 - (uVar32 & 0xfffffff8);
              puVar39 = (undefined8 *)(lVar12 + lVar15 * uVar26);
              puVar38 = (undefined8 *)(lVar13 + uVar26);
              do {
                lVar17 = lVar17 + 8;
                *puVar39 = *puVar38;
                puVar39 = (undefined8 *)
                          ((long)puVar39 +
                          (-(ulong)(param_19 >> 0x1f) & 0xfffffff800000000 | (ulong)param_19 << 3));
                puVar38 = puVar38 + 1;
              } while (lVar17 != 0);
              uVar26 = uVar35;
              if (uVar35 == uVar32) goto LAB_0010723c;
            }
            else {
              do {
                uVar11 = puVar39[-2];
                uVar41 = puVar39[1];
                uVar40 = *puVar39;
                uVar26 = uVar26 - 0x20;
                puVar38[-1] = puVar39[-1];
                puVar38[-2] = uVar11;
                puVar38[1] = uVar41;
                *puVar38 = uVar40;
                puVar39 = puVar39 + 4;
                puVar38 = (undefined8 *)
                          ((long)puVar38 +
                          (-(ulong)(param_19 >> 0x1f) & 0xffffffe000000000 | (ulong)param_19 << 5));
              } while (uVar26 != 0);
              if (uVar34 == uVar32) goto LAB_0010723c;
              uVar26 = uVar34;
              if ((uVar7 & 0x18) != 0) goto LAB_00107300;
            }
          }
          lVar17 = lVar15 * uVar26;
          do {
            puVar24 = (undefined *)(lVar13 + uVar26);
            uVar26 = uVar26 + 1;
            *(undefined *)(lVar12 + lVar17) = *puVar24;
            lVar17 = lVar17 + lVar15;
          } while (uVar32 != uVar26);
        }
LAB_0010723c:
        uVar29 = uVar29 + 1;
        puVar22 = (undefined8 *)((long)puVar22 + lVar14);
        puVar21 = (undefined8 *)((long)puVar21 + lVar20);
        lVar12 = lVar12 + lVar14;
        lVar13 = lVar13 + lVar20;
      } while (uVar29 != uVar5);
    }
  }
  return iVar10;
}




