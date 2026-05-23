# Native Library Analysis

This pass adds ELF metadata, imports/exports, JNI symbol candidates, interesting strings, and selected ARM64 disassembly for the native libraries shipped in the `arm64-v8a` split.

Important boundary: this is assembly-level recovery. Reconstructing original C/C++ control structures, source file names, comments, and local variable names is not possible from these stripped release libraries unless external debug symbols or source maps are available.

## Libraries

| Library | Bytes | Needed | Symbols | Imports | JNI candidates | Selected disassembly |
| --- | ---: | --- | ---: | ---: | ---: | ---: |
| `libc++_shared.so` | 1822840 | libc.so, libm.so, libdl.so | 9056 | 164 | 0 | 0 |
| `libimage_processing_util_jni.so` | 28944 | liblog.so, libandroid.so, libjnigraphics.so, libm.so, libdl.so, libc.so | 22 | 16 | 6 | 6 |
| `libopencv_java4.so` | 18958456 | libdl.so, libm.so, liblog.so, libjnigraphics.so, libz.so, libmediandk.so, libc++_shared.so, libc.so | 7224 | 450 | 2398 | 2398 |
| `libsqlcipher.so` | 3351792 | liblog.so, libc.so, libm.so, libdl.so | 546 | 146 | 7 | 8 |

## Outputs

### `libc++_shared.so`
- meta: `analysis/native_deep/libc++_shared.so.meta.json`
- exports: `analysis/native_deep/libc++_shared.so.exports.txt`
- imports: `analysis/native_deep/libc++_shared.so.imports.txt`
- jni: `analysis/native_deep/libc++_shared.so.jni_symbols.txt`
- strings: `analysis/native_deep/libc++_shared.so.interesting_strings.txt`
- disassembly: `analysis/native_deep/libc++_shared.so.selected_disassembly.asm`

### `libimage_processing_util_jni.so`
- meta: `analysis/native_deep/libimage_processing_util_jni.so.meta.json`
- exports: `analysis/native_deep/libimage_processing_util_jni.so.exports.txt`
- imports: `analysis/native_deep/libimage_processing_util_jni.so.imports.txt`
- jni: `analysis/native_deep/libimage_processing_util_jni.so.jni_symbols.txt`
- strings: `analysis/native_deep/libimage_processing_util_jni.so.interesting_strings.txt`
- disassembly: `analysis/native_deep/libimage_processing_util_jni.so.selected_disassembly.asm`

### `libopencv_java4.so`
- meta: `analysis/native_deep/libopencv_java4.so.meta.json`
- exports: `analysis/native_deep/libopencv_java4.so.exports.txt`
- imports: `analysis/native_deep/libopencv_java4.so.imports.txt`
- jni: `analysis/native_deep/libopencv_java4.so.jni_symbols.txt`
- strings: `analysis/native_deep/libopencv_java4.so.interesting_strings.txt`
- disassembly: `analysis/native_deep/libopencv_java4.so.selected_disassembly.asm`

### `libsqlcipher.so`
- meta: `analysis/native_deep/libsqlcipher.so.meta.json`
- exports: `analysis/native_deep/libsqlcipher.so.exports.txt`
- imports: `analysis/native_deep/libsqlcipher.so.imports.txt`
- jni: `analysis/native_deep/libsqlcipher.so.jni_symbols.txt`
- strings: `analysis/native_deep/libsqlcipher.so.interesting_strings.txt`
- disassembly: `analysis/native_deep/libsqlcipher.so.selected_disassembly.asm`


