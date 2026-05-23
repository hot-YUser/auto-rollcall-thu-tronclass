/*
 * C-like pseudocode for libsqlcipher.so
 * This is inferred C-like pseudocode, not original source.
 */

/* 0014a6c0 sqlite3_compileoption_used */

void sqlite3_compileoption_used(void)

{
  (*(code *)PTR_sqlite3_compileoption_used_0043d248)();
  return;
}



/* 0014acf0 sqlcipher::compile */

void sqlcipher::compile(_JNIEnv *param_1,_jobject *param_2,sqlite3 *param_3,_jstring *param_4)

{
  (*(code *)PTR_compile_0043d560)();
  return;
}



/* 001780d4 sqlite3_compileoption_used */

void sqlite3_compileoption_used(byte *param_1)

{
  byte bVar1;
  uint uVar2;
  long lVar3;
  bool bVar4;
  size_t sVar5;
  byte *pbVar6;
  undefined8 uVar7;
  char cVar8;
  long lVar9;
  char *pcVar10;
  char cVar11;
  ulong uVar12;
  ulong uVar13;
  byte *pbVar14;
  ulong uVar15;
  byte *__s;
  
  lVar3 = tpidr_el0;
  lVar9 = *(long *)(lVar3 + 0x28);
  if (param_1 == (byte *)0x0) {
    __s = (byte *)0x0;
    uVar12 = 0;
    bVar4 = true;
    goto LAB_00178274;
  }
  uVar12 = (ulong)*param_1;
  if (uVar12 == 0) {
    pcVar10 = "SQLITE_";
LAB_00178234:
    cVar8 = (&DAT_003c4c98)[(byte)*pcVar10];
    cVar11 = '\0';
LAB_00178258:
    __s = param_1 + 7;
    if (cVar11 != cVar8) {
      __s = param_1;
    }
  }
  else {
    if ((uVar12 | 0x20) != 0x73) {
      pcVar10 = &DAT_003c4c98 + uVar12;
      cVar8 = 's';
LAB_00178254:
      cVar11 = *pcVar10;
      goto LAB_00178258;
    }
    uVar12 = (ulong)param_1[1];
    if (uVar12 == 0) {
      pcVar10 = "QLITE_";
      goto LAB_00178234;
    }
    if ((uVar12 | 0x20) != 0x71) {
      pcVar10 = &DAT_003c4c98 + uVar12;
      cVar8 = 'q';
      goto LAB_00178254;
    }
    uVar12 = (ulong)param_1[2];
    if (uVar12 == 0) {
      pcVar10 = "LITE_";
      goto LAB_00178234;
    }
    if ((uVar12 | 0x20) != 0x6c) {
      pcVar10 = &DAT_003c4c98 + uVar12;
      cVar8 = 'l';
      goto LAB_00178254;
    }
    uVar12 = (ulong)param_1[3];
    if (uVar12 == 0) {
      pcVar10 = "ITE_";
      goto LAB_00178234;
    }
    if ((uVar12 | 0x20) != 0x69) {
      pcVar10 = &DAT_003c4c98 + uVar12;
      cVar8 = 'i';
      goto LAB_00178254;
    }
    uVar12 = (ulong)param_1[4];
    if (uVar12 == 0) {
      pcVar10 = "TE_";
      goto LAB_00178234;
    }
    if ((uVar12 | 0x20) != 0x74) {
      pcVar10 = &DAT_003c4c98 + uVar12;
      cVar8 = 't';
      goto LAB_00178254;
    }
    uVar12 = (ulong)param_1[5];
    if (uVar12 == 0) {
      pcVar10 = "E_";
      goto LAB_00178234;
    }
    if ((uVar12 | 0x20) != 0x65) {
      pcVar10 = &DAT_003c4c98 + uVar12;
      cVar8 = 'e';
      goto LAB_00178254;
    }
    bVar1 = param_1[6];
    if ((ulong)bVar1 == 0) {
      pcVar10 = "_";
      goto LAB_00178234;
    }
    if (bVar1 != 0x5f) {
      pcVar10 = &DAT_003c4c98 + bVar1;
      cVar8 = '_';
      goto LAB_00178254;
    }
    __s = param_1 + 7;
  }
  sVar5 = strlen((char *)__s);
  bVar4 = false;
  uVar12 = (ulong)((uint)sVar5 & 0x3fffffff);
LAB_00178274:
  uVar13 = 0;
  do {
    if (!bVar4) {
      pbVar6 = __s;
      pbVar14 = (&PTR_s_COMPILER_clang_8_0_7_0041ab50)[uVar13];
      uVar15 = uVar12;
      if ((int)uVar12 != 0) {
        do {
          if ((ulong)*pbVar6 == 0) {
            cVar8 = '\0';
            cVar11 = (&DAT_003c4c98)[*pbVar14];
LAB_001782ec:
            if (cVar8 != cVar11) goto LAB_00178304;
            break;
          }
          cVar8 = (&DAT_003c4c98)[*pbVar6];
          cVar11 = (&DAT_003c4c98)[*pbVar14];
          if (cVar8 != cVar11) goto LAB_001782ec;
          uVar2 = (int)uVar15 - 1;
          pbVar6 = pbVar6 + 1;
          pbVar14 = pbVar14 + 1;
          uVar15 = (ulong)uVar2;
        } while (0 < (int)uVar2);
      }
      if (((&DAT_003c4df8)[(byte)(&PTR_s_COMPILER_clang_8_0_7_0041ab50)[uVar13][uVar12]] & 0x46) ==
          0) {
        uVar7 = 1;
        goto LAB_0017831c;
      }
    }
LAB_00178304:
    uVar13 = uVar13 + 1;
    if (0x11 < uVar13) {
      uVar7 = 0;
LAB_0017831c:
      if (*(long *)(lVar3 + 0x28) != lVar9) {
                    /* WARNING: Subroutine does not return */
        __stack_chk_fail(uVar7);
      }
      return;
    }
  } while( true );
}



/* 00178340 sqlite3_compileoption_get */

void sqlite3_compileoption_get(uint param_1)

{
  long lVar1;
  undefined *puVar2;
  
  lVar1 = tpidr_el0;
  if (param_1 < 0x12) {
    puVar2 = (&PTR_s_COMPILER_clang_8_0_7_0041ab50)[(int)param_1];
  }
  else {
    puVar2 = (undefined *)0x0;
  }
  if (*(long *)(lVar1 + 0x28) == *(long *)(lVar1 + 0x28)) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  __stack_chk_fail(puVar2);
}



/* 002ad4f0 sqlcipher::compile */

/* sqlcipher::compile(_JNIEnv*, _jobject*, sqlite3*, _jstring*) */

void sqlcipher::compile(_JNIEnv *param_1,_jobject *param_2,sqlite3 *param_3,_jstring *param_4)

{
  long lVar1;
  undefined8 uVar2;
  int iVar3;
  undefined8 uVar4;
  char *__s;
  size_t sVar5;
  undefined8 *__dest;
  long lVar6;
  long local_60;
  long local_58;
  
  lVar1 = tpidr_el0;
  local_58 = *(long *)(lVar1 + 0x28);
  local_60 = (**(code **)(*(long *)param_1 + 0x328))(param_1,param_2,DAT_00442370);
  if (local_60 != 0) {
    sqlite3_finalize();
    (**(code **)(*(long *)param_1 + 0x370))(param_1,param_2,DAT_00442370,0);
  }
  uVar4 = (**(code **)(*(long *)param_1 + 0x528))(param_1,param_4,0);
  iVar3 = (**(code **)(*(long *)param_1 + 0x520))(param_1,param_4);
  iVar3 = sqlite3_prepare16_v2(param_3,uVar4,iVar3 << 1,&local_60,0);
  (**(code **)(*(long *)param_1 + 0x530))(param_1,param_4,uVar4);
  if (iVar3 == 0) {
    (**(code **)(*(long *)param_1 + 0x370))(param_1,param_2,DAT_00442370,local_60);
    lVar6 = local_60;
  }
  else {
    __s = (char *)(**(code **)(*(long *)param_1 + 0x548))(param_1,param_4,0);
    sVar5 = strlen(__s);
    __dest = (undefined8 *)malloc(sVar5 + 0x32);
    uVar2 = s___while_compiling__003cbb9c._8_8_;
    uVar4 = s___while_compiling__003cbb9c._0_8_;
    if (__dest != (undefined8 *)0x0) {
      *(undefined4 *)(__dest + 2) = 0x203a67;
      __dest[1] = uVar2;
      *__dest = uVar4;
      strcat((char *)__dest,__s);
    }
    (**(code **)(*(long *)param_1 + 0x550))(param_1,param_4,__s);
    throw_sqlite3_exception(param_1,param_3,(char *)__dest);
    free(__dest);
    lVar6 = 0;
  }
  if (*(long *)(lVar1 + 0x28) == local_58) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  __stack_chk_fail(lVar6);
}



/* 002ada70 sqlcipher::native_key */

/* sqlcipher::native_key(_JNIEnv*, _jobject*, _jbyteArray*) */

void sqlcipher::native_key(_JNIEnv *param_1,_jobject *param_2,_jbyteArray *param_3)

{
  long lVar1;
  int iVar2;
  sqlite3 *psVar3;
  long lVar4;
  long lVar5;
  
  lVar1 = tpidr_el0;
  lVar5 = *(long *)(lVar1 + 0x28);
  psVar3 = (sqlite3 *)(**(code **)(*(long *)param_1 + 0x328))(param_1,param_2,DAT_00442380);
  lVar4 = (**(code **)(*(long *)param_1 + 0x5c0))(param_1,param_3,0);
  iVar2 = (**(code **)(*(long *)param_1 + 0x558))(param_1,param_3);
  if (((lVar4 != 0) && (iVar2 != 0)) && (iVar2 = sqlite3_key(psVar3,lVar4,iVar2), iVar2 != 0)) {
    throw_sqlite3_exception(param_1,psVar3);
  }
  if (lVar4 != 0) {
    (**(code **)(*(long *)param_1 + 0x600))(param_1,param_3,lVar4,2);
  }
  if (*(long *)(lVar1 + 0x28) == lVar5) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  __stack_chk_fail();
}



/* 002adb58 sqlcipher::native_rekey */

/* sqlcipher::native_rekey(_JNIEnv*, _jobject*, _jbyteArray*) */

void sqlcipher::native_rekey(_JNIEnv *param_1,_jobject *param_2,_jbyteArray *param_3)

{
  long lVar1;
  int iVar2;
  sqlite3 *psVar3;
  long lVar4;
  long lVar5;
  
  lVar1 = tpidr_el0;
  lVar5 = *(long *)(lVar1 + 0x28);
  psVar3 = (sqlite3 *)(**(code **)(*(long *)param_1 + 0x328))(param_1,param_2,DAT_00442380);
  lVar4 = (**(code **)(*(long *)param_1 + 0x5c0))(param_1,param_3,0);
  iVar2 = (**(code **)(*(long *)param_1 + 0x558))(param_1,param_3);
  if (((lVar4 != 0) && (iVar2 != 0)) && (iVar2 = sqlite3_rekey(psVar3,lVar4,iVar2), iVar2 != 0)) {
    throw_sqlite3_exception(param_1,psVar3);
  }
  if (lVar4 != 0) {
    (**(code **)(*(long *)param_1 + 0x600))(param_1,param_3,lVar4,2);
  }
  if (*(long *)(lVar1 + 0x28) == lVar5) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  __stack_chk_fail();
}



/* 002adc40 sqlcipher::native_key_mutf8 */

/* sqlcipher::native_key_mutf8(_JNIEnv*, _jobject*, _jcharArray*) */

void sqlcipher::native_key_mutf8(_JNIEnv *param_1,_jobject *param_2,_jcharArray *param_3)

{
  long lVar1;
  undefined4 uVar2;
  int iVar3;
  sqlite3 *psVar4;
  undefined8 uVar5;
  undefined8 uVar6;
  undefined8 uVar7;
  undefined auStack_5c [4];
  long local_58;
  
  lVar1 = tpidr_el0;
  local_58 = *(long *)(lVar1 + 0x28);
  psVar4 = (sqlite3 *)(**(code **)(*(long *)param_1 + 0x328))(param_1,param_2,DAT_00442380);
  uVar2 = (**(code **)(*(long *)param_1 + 0x558))(param_1,param_3);
  uVar5 = (**(code **)(*(long *)param_1 + 0x5c8))(param_1,param_3,auStack_5c);
  uVar6 = (**(code **)(*(long *)param_1 + 0x518))(param_1,uVar5,uVar2);
  uVar7 = (**(code **)(*(long *)param_1 + 0x548))(param_1,uVar6,0);
  iVar3 = (**(code **)(*(long *)param_1 + 0x540))(param_1,uVar6);
  if ((0 < iVar3) && (iVar3 = sqlite3_key(psVar4,uVar7,iVar3), iVar3 != 0)) {
    throw_sqlite3_exception(param_1,psVar4);
  }
  (**(code **)(*(long *)param_1 + 0x608))(param_1,param_3,uVar5,2);
  (**(code **)(*(long *)param_1 + 0x550))(param_1,uVar6,uVar7);
  if (*(long *)(lVar1 + 0x28) == local_58) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  __stack_chk_fail();
}



/* 002add94 sqlcipher::native_rawExecSQL */

/* sqlcipher::native_rawExecSQL(_JNIEnv*, _jobject*, _jstring*) */

void sqlcipher::native_rawExecSQL(_JNIEnv *param_1,_jobject *param_2,_jstring *param_3)

{
  long lVar1;
  int iVar2;
  sqlite3 *psVar3;
  undefined8 uVar4;
  long lVar5;
  
  lVar1 = tpidr_el0;
  lVar5 = *(long *)(lVar1 + 0x28);
  psVar3 = (sqlite3 *)(**(code **)(*(long *)param_1 + 0x328))(param_1,param_2,DAT_00442380);
  uVar4 = (**(code **)(*(long *)param_1 + 0x548))(param_1,param_3,0);
  iVar2 = sqlite3_exec(psVar3,uVar4,0,0,0);
  (**(code **)(*(long *)param_1 + 0x550))(param_1,param_3,uVar4);
  if (iVar2 != 0) {
    throw_sqlite3_exception(param_1,psVar3);
  }
  if (*(long *)(lVar1 + 0x28) == lVar5) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  __stack_chk_fail();
}



/* 002ade64 sqlcipher::dbopen */

/* sqlcipher::dbopen(_JNIEnv*, _jobject*, _jstring*, int) */

void sqlcipher::dbopen(_JNIEnv *param_1,_jobject *param_2,_jstring *param_3,int param_4)

{
  long lVar1;
  long lVar2;
  int iVar3;
  uint uVar4;
  char *__s;
  size_t sVar5;
  char *pcVar6;
  char *pcVar7;
  uint uVar8;
  long local_88;
  char acStack_80 [24];
  long local_68;
  
  lVar1 = tpidr_el0;
  local_68 = *(long *)(lVar1 + 0x28);
  local_88 = 0;
  __s = (char *)(**(code **)(*(long *)param_1 + 0x548))(param_1,param_3,0);
  if ((DAT_00442388 & 1) == 0) {
    sVar5 = strlen(__s);
    pcVar6 = (char *)malloc((long)((sVar5 << 0x20) + 0x100000000) >> 0x20);
    pcVar7 = strncpy(pcVar6,__s,(long)(int)sVar5);
    pcVar7[(int)sVar5] = '\0';
    iVar3 = sqlite3_config(0x10,FUN_002ae63c,pcVar6);
    if (iVar3 != 0) goto LAB_002adf14;
    DAT_00442388 = 1;
    if (((uint)param_4 >> 0x1c & 1) != 0) goto LAB_002adf34;
LAB_002adf18:
    uVar8 = 1;
    if ((param_4 & 1U) == 0) {
      uVar8 = 2;
    }
  }
  else {
LAB_002adf14:
    if (((uint)param_4 >> 0x1c & 1) == 0) goto LAB_002adf18;
LAB_002adf34:
    uVar8 = 6;
  }
  uVar4 = sqlite3_open_v2(__s,&local_88,uVar8,0);
  if (uVar4 != 0) {
    if (uVar4 == 0x65) {
      jniThrowException(param_1,"net/sqlcipher/database/SQLiteDoneException",
                        "Could not open database");
    }
    else {
      sprintf(acStack_80,"error code %d",(ulong)uVar4);
      throw_sqlite3_exception(param_1,uVar4,acStack_80,"Could not open database");
    }
    goto joined_r0x002ae0b4;
  }
  if (((uVar8 >> 1 & 1) == 0) ||
     (iVar3 = sqlite3_db_readonly(local_88,0), lVar2 = local_88, iVar3 == 0)) {
    sqlite3_soft_heap_limit(0x400000);
    iVar3 = sqlite3_busy_timeout(local_88,1000);
    lVar2 = local_88;
    if (iVar3 == 0) {
      sqlite3_enable_load_extension(local_88,1);
      (**(code **)(*(long *)param_1 + 0x370))(param_1,param_2,DAT_00442380,local_88);
      local_88 = 0;
      goto joined_r0x002ae0b4;
    }
    if ((local_88 != 0) && (iVar3 = sqlite3_errcode(local_88), iVar3 != 0)) {
      iVar3 = sqlite3_errcode(lVar2);
      pcVar6 = (char *)sqlite3_errmsg(lVar2);
      throw_sqlite3_exception(param_1,iVar3,pcVar6,"Could not set busy timeout");
      goto joined_r0x002ae0b4;
    }
    pcVar6 = "Could not set busy timeout";
  }
  else {
    if ((local_88 != 0) && (iVar3 = sqlite3_errcode(local_88), iVar3 != 0)) {
      iVar3 = sqlite3_errcode(lVar2);
      pcVar6 = (char *)sqlite3_errmsg(lVar2);
      throw_sqlite3_exception
                (param_1,iVar3,pcVar6,"Could not open the database in read/write mode.");
      goto joined_r0x002ae0b4;
    }
    pcVar6 = "Could not open the database in read/write mode.";
  }
  throw_sqlite3_exception(param_1,0,"unknown error",pcVar6);
joined_r0x002ae0b4:
  if (__s != (char *)0x0) {
    (**(code **)(*(long *)param_1 + 0x550))(param_1,param_3,__s);
  }
  if (local_88 != 0) {
    sqlite3_close();
  }
  if (*(long *)(lVar1 + 0x28) != local_68) {
                    /* WARNING: Subroutine does not return */
    __stack_chk_fail();
  }
  return;
}



/* 002ae274 sqlcipher::register_android_database_SQLiteDatabase */

/* sqlcipher::register_android_database_SQLiteDatabase(_JNIEnv*) */

undefined8 sqlcipher::register_android_database_SQLiteDatabase(_JNIEnv *param_1)

{
  long lVar1;
  long lVar2;
  undefined8 uVar3;
  long lVar4;
  
  lVar1 = tpidr_el0;
  lVar4 = *(long *)(lVar1 + 0x28);
  lVar2 = (**(code **)(*(long *)param_1 + 0x30))(param_1,"net/sqlcipher/database/SQLiteDatabase");
  if ((lVar2 == 0) ||
     (DAT_00442380 = (**(code **)(*(long *)param_1 + 0x2f0))
                               (param_1,lVar2,"mNativeHandle",&DAT_003cbeb3), DAT_00442380 == 0)) {
    if (*(long *)(lVar1 + 0x28) == lVar4) {
      return 0xffffffff;
    }
  }
  else {
    uVar3 = (**(code **)(*(long *)param_1 + 0x6b8))(param_1,lVar2,&PTR_s_dbopen_004403f8,0xe);
    if (*(long *)(lVar1 + 0x28) == lVar4) {
      return uVar3;
    }
  }
                    /* WARNING: Subroutine does not return */
  __stack_chk_fail();
}



/* 002ae344 JNI_OnLoad */

undefined4 JNI_OnLoad(long *param_1)

{
  long lVar1;
  long *plVar2;
  int iVar3;
  long lVar4;
  undefined4 uVar5;
  long *local_40;
  long local_38;
  
  lVar1 = tpidr_el0;
  local_38 = *(long *)(lVar1 + 0x28);
  uVar5 = 0x10002;
  iVar3 = (**(code **)(*param_1 + 0x30))(param_1,&local_40,0x10002);
  plVar2 = local_40;
  if (iVar3 == 0) {
    lVar4 = (**(code **)(*local_40 + 0x30))(local_40,"net/sqlcipher/database/SQLiteDatabase");
    if (lVar4 != 0) {
      DAT_00442380 = (**(code **)(*plVar2 + 0x2f0))(plVar2,lVar4,"mNativeHandle",&DAT_003cbeb3);
      if (DAT_00442380 != 0) {
        (**(code **)(*plVar2 + 0x6b8))(plVar2,lVar4,&PTR_s_dbopen_004403f8,0xe);
      }
    }
    sqlcipher::register_android_database_SQLiteCompiledSql((_JNIEnv *)local_40);
    sqlcipher::register_android_database_SQLiteQuery((_JNIEnv *)local_40);
    sqlcipher::register_android_database_SQLiteProgram((_JNIEnv *)local_40);
    sqlcipher::register_android_database_SQLiteStatement((_JNIEnv *)local_40);
    sqlcipher::register_android_database_CursorWindow((_JNIEnv *)local_40);
  }
  else {
    uVar5 = 0xffffffff;
  }
  if (*(long *)(lVar1 + 0x28) == local_38) {
    return uVar5;
  }
                    /* WARNING: Subroutine does not return */
  __stack_chk_fail();
}




