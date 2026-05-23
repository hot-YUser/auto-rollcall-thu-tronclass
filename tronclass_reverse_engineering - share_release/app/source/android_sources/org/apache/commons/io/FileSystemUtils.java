package org.apache.commons.io;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.Reader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.StringTokenizer;
public class FileSystemUtils {
    private static final String DF;
    private static final int INIT_PROBLEM = -1;
    private static final FileSystemUtils INSTANCE = new FileSystemUtils();
    private static final int OS;
    private static final int OTHER = 0;
    private static final int POSIX_UNIX = 3;
    private static final int UNIX = 2;
    private static final int WINDOWS = 1;

    static {
        String property;
        String str = "df";
        int i = -1;
        try {
            property = System.getProperty("os.name");
        } catch (Exception unused) {
        }
        if (property == null) {
            throw new IOException("os.name not found");
        }
        String lowerCase = property.toLowerCase(Locale.ENGLISH);
        if (lowerCase.indexOf("windows") != -1) {
            i = 1;
        } else if (lowerCase.indexOf("linux") == -1 && lowerCase.indexOf("mpe/ix") == -1 && lowerCase.indexOf("freebsd") == -1 && lowerCase.indexOf("irix") == -1 && lowerCase.indexOf("digital unix") == -1 && lowerCase.indexOf("unix") == -1 && lowerCase.indexOf("mac os x") == -1) {
            if (lowerCase.indexOf("sun os") != -1 || lowerCase.indexOf("sunos") != -1 || lowerCase.indexOf("solaris") != -1) {
                str = "/usr/xpg4/bin/df";
            } else if (lowerCase.indexOf("hp-ux") == -1 && lowerCase.indexOf("aix") == -1) {
                i = 0;
            }
            i = 3;
        } else {
            i = 2;
        }
        OS = i;
        DF = str;
    }

    @Deprecated
    public static long freeSpace(String str) throws IOException {
        return INSTANCE.freeSpaceOS(str, OS, false, -1L);
    }

    public static long freeSpaceKb(String str) throws IOException {
        return freeSpaceKb(str, -1L);
    }

    public static long freeSpaceKb(String str, long j) throws IOException {
        return INSTANCE.freeSpaceOS(str, OS, true, j);
    }

    public static long freeSpaceKb() throws IOException {
        return freeSpaceKb(-1L);
    }

    public static long freeSpaceKb(long j) throws IOException {
        return freeSpaceKb(new File(".").getAbsolutePath(), j);
    }

    long freeSpaceOS(String str, int i, boolean z, long j) throws Throwable {
        if (str == null) {
            throw new IllegalArgumentException("Path must not be empty");
        }
        if (i == 0) {
            throw new IllegalStateException("Unsupported operating system");
        }
        if (i == 1) {
            long jFreeSpaceWindows = freeSpaceWindows(str, j);
            return z ? jFreeSpaceWindows / 1024 : jFreeSpaceWindows;
        }
        if (i == 2) {
            return freeSpaceUnix(str, z, false, j);
        }
        if (i == 3) {
            return freeSpaceUnix(str, z, true, j);
        }
        throw new IllegalStateException("Exception caught when determining operating system");
    }

    long freeSpaceWindows(String str, long j) throws Throwable {
        String strNormalize = FilenameUtils.normalize(str, false);
        if (strNormalize.length() > 0 && strNormalize.charAt(0) != '\"') {
            strNormalize = "\"" + strNormalize + "\"";
        }
        List<String> listPerformCommand = performCommand(new String[]{"cmd.exe", "/C", "dir /a /-c " + strNormalize}, Integer.MAX_VALUE, j);
        for (int size = listPerformCommand.size() - 1; size >= 0; size--) {
            String str2 = listPerformCommand.get(size);
            if (str2.length() > 0) {
                return parseDir(str2, strNormalize);
            }
        }
        throw new IOException("Command line 'dir /-c' did not return any info for path '" + strNormalize + "'");
    }

    long parseDir(String str, String str2) throws IOException {
        int i;
        int i2;
        int i3;
        int length = str.length();
        while (true) {
            length--;
            i = 0;
            if (length < 0) {
                i2 = 0;
                break;
            }
            if (Character.isDigit(str.charAt(length))) {
                i2 = length + 1;
                break;
            }
        }
        while (true) {
            if (length < 0) {
                i3 = 0;
                break;
            }
            char cCharAt = str.charAt(length);
            if (!Character.isDigit(cCharAt) && cCharAt != ',' && cCharAt != '.') {
                i3 = length + 1;
                break;
            }
            length--;
        }
        if (length < 0) {
            throw new IOException("Command line 'dir /-c' did not return valid info for path '" + str2 + "'");
        }
        StringBuilder sb = new StringBuilder(str.substring(i3, i2));
        while (i < sb.length()) {
            if (sb.charAt(i) == ',' || sb.charAt(i) == '.') {
                sb.deleteCharAt(i);
                i--;
            }
            i++;
        }
        return parseBytes(sb.toString(), str2);
    }

    long freeSpaceUnix(String str, boolean z, boolean z2, long j) throws Throwable {
        String str2;
        if (str.length() == 0) {
            throw new IllegalArgumentException("Path must not be empty");
        }
        if (!z) {
            str2 = "-";
        } else {
            str2 = "-k";
        }
        if (z2) {
            str2 = str2 + "P";
        }
        List<String> listPerformCommand = performCommand(str2.length() > 1 ? new String[]{DF, str2, str} : new String[]{DF, str}, 3, j);
        if (listPerformCommand.size() < 2) {
            throw new IOException("Command line '" + DF + "' did not return info as expected for path '" + str + "'- response was " + listPerformCommand);
        }
        StringTokenizer stringTokenizer = new StringTokenizer(listPerformCommand.get(1), " ");
        if (stringTokenizer.countTokens() < 4) {
            if (stringTokenizer.countTokens() == 1 && listPerformCommand.size() >= 3) {
                stringTokenizer = new StringTokenizer(listPerformCommand.get(2), " ");
            } else {
                throw new IOException("Command line '" + DF + "' did not return data as expected for path '" + str + "'- check path is valid");
            }
        } else {
            stringTokenizer.nextToken();
        }
        stringTokenizer.nextToken();
        stringTokenizer.nextToken();
        return parseBytes(stringTokenizer.nextToken(), str);
    }

    long parseBytes(String str, String str2) throws IOException {
        try {
            long j = Long.parseLong(str);
            if (j >= 0) {
                return j;
            }
            throw new IOException("Command line '" + DF + "' did not find free space in response for path '" + str2 + "'- check path is valid");
        } catch (NumberFormatException e) {
            throw new IOExceptionWithCause("Command line '" + DF + "' did not return numeric data as expected for path '" + str2 + "'- check path is valid", e);
        }
    }

    /* high-level source view WARN: Multi-variable type inference failed */
    /* high-level source view WARN: Removed duplicated region for block: B:61:0x0117  */
    /* high-level source view WARN: Type inference failed for: r7v0 */
    /* high-level source view WARN: Type inference failed for: r7v1 */
    /* high-level source view WARN: Type inference failed for: r7v10, types: [java.io.BufferedReader, java.io.Reader] */
    /* high-level source view WARN: Type inference failed for: r7v11 */
    /* high-level source view WARN: Type inference failed for: r7v12 */
    /* high-level source view WARN: Type inference failed for: r7v2, types: [java.io.Reader] */
    /* high-level source view WARN: Type inference failed for: r7v3 */
    /* high-level source view WARN: Type inference failed for: r7v4 */
    /* high-level source view WARN: Type inference failed for: r7v5 */
    /* high-level source view WARN: Type inference failed for: r7v6 */
    /* high-level source view WARN: Type inference failed for: r7v7 */
    /* high-level source view WARN: Type inference failed for: r7v8 */
    /* high-level source view WARN: Type inference failed for: r7v9 */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    List<String> performCommand(String[] strArr, int i, long j) throws Throwable {
        Process processOpenProcess;
        OutputStream outputStream;
        InputStream inputStream;
        InputStream errorStream;
        ?? bufferedReader;
        ?? r7;
        ArrayList arrayList = new ArrayList(20);
        InputStream inputStream2 = null;
        try {
            Thread threadStart = ThreadMonitor.start(j);
            processOpenProcess = openProcess(strArr);
            try {
                inputStream = processOpenProcess.getInputStream();
                try {
                    outputStream = processOpenProcess.getOutputStream();
                } catch (InterruptedException e) {
                    e = e;
                    outputStream = null;
                    errorStream = outputStream;
                    bufferedReader = errorStream;
                    inputStream2 = processOpenProcess;
                    bufferedReader = bufferedReader;
                    try {
                        throw new IOExceptionWithCause("Command line threw an InterruptedException for command " + Arrays.asList(strArr) + " timeout=" + j, e);
                    } catch (Throwable th) {
                        th = th;
                        processOpenProcess = inputStream2;
                        inputStream2 = inputStream;
                        r7 = bufferedReader;
                        IOUtils.closeQuietly(inputStream2);
                        IOUtils.closeQuietly(outputStream);
                        IOUtils.closeQuietly(errorStream);
                        IOUtils.closeQuietly((Reader) r7);
                        if (processOpenProcess != null) {
                            processOpenProcess.destroy();
                        }
                        throw th;
                    }
                } catch (Throwable th2) {
                    th = th2;
                    outputStream = null;
                    errorStream = null;
                }
                try {
                    errorStream = processOpenProcess.getErrorStream();
                    try {
                        bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
                        try {
                            for (String line = bufferedReader.readLine(); line != null && arrayList.size() < i; line = bufferedReader.readLine()) {
                                arrayList.add(line.toLowerCase(Locale.ENGLISH).trim());
                            }
                            processOpenProcess.waitFor();
                            ThreadMonitor.stop(threadStart);
                            if (processOpenProcess.exitValue() != 0) {
                                throw new IOException("Command line returned OS error code '" + processOpenProcess.exitValue() + "' for command " + Arrays.asList(strArr));
                            }
                            if (arrayList.isEmpty()) {
                                throw new IOException("Command line did not return any info for command " + Arrays.asList(strArr));
                            }
                            IOUtils.closeQuietly(inputStream);
                            IOUtils.closeQuietly(outputStream);
                            IOUtils.closeQuietly(errorStream);
                            IOUtils.closeQuietly((Reader) bufferedReader);
                            if (processOpenProcess != null) {
                                processOpenProcess.destroy();
                            }
                            return arrayList;
                        } catch (InterruptedException e2) {
                            e = e2;
                            inputStream2 = processOpenProcess;
                            bufferedReader = bufferedReader;
                            throw new IOExceptionWithCause("Command line threw an InterruptedException for command " + Arrays.asList(strArr) + " timeout=" + j, e);
                        } catch (Throwable th3) {
                            th = th3;
                            inputStream2 = inputStream;
                            r7 = bufferedReader;
                            IOUtils.closeQuietly(inputStream2);
                            IOUtils.closeQuietly(outputStream);
                            IOUtils.closeQuietly(errorStream);
                            IOUtils.closeQuietly((Reader) r7);
                            if (processOpenProcess != null) {
                            }
                            throw th;
                        }
                    } catch (InterruptedException e3) {
                        e = e3;
                        bufferedReader = 0;
                    } catch (Throwable th4) {
                        th = th4;
                        bufferedReader = 0;
                    }
                } catch (InterruptedException e4) {
                    e = e4;
                    errorStream = null;
                    bufferedReader = errorStream;
                    inputStream2 = processOpenProcess;
                    bufferedReader = bufferedReader;
                    throw new IOExceptionWithCause("Command line threw an InterruptedException for command " + Arrays.asList(strArr) + " timeout=" + j, e);
                } catch (Throwable th5) {
                    th = th5;
                    errorStream = null;
                    bufferedReader = errorStream;
                    inputStream2 = inputStream;
                    r7 = bufferedReader;
                    IOUtils.closeQuietly(inputStream2);
                    IOUtils.closeQuietly(outputStream);
                    IOUtils.closeQuietly(errorStream);
                    IOUtils.closeQuietly((Reader) r7);
                    if (processOpenProcess != null) {
                    }
                    throw th;
                }
            } catch (InterruptedException e5) {
                e = e5;
                inputStream = null;
                outputStream = null;
            } catch (Throwable th6) {
                th = th6;
                outputStream = null;
                errorStream = outputStream;
                r7 = errorStream;
                IOUtils.closeQuietly(inputStream2);
                IOUtils.closeQuietly(outputStream);
                IOUtils.closeQuietly(errorStream);
                IOUtils.closeQuietly((Reader) r7);
                if (processOpenProcess != null) {
                }
                throw th;
            }
        } catch (InterruptedException e6) {
            e = e6;
            inputStream = null;
            outputStream = null;
            errorStream = null;
            bufferedReader = 0;
        } catch (Throwable th7) {
            th = th7;
            processOpenProcess = null;
            outputStream = null;
        }
    }

    Process openProcess(String[] strArr) throws IOException {
        return Runtime.getRuntime().exec(strArr);
    }
}

