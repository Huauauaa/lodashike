package com.huauauaa.array;

/**
 * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
 *
 * <p>
 * <a href="https://github.com/Huauauaa/lodashike/blob/main/java/src/main/java/com/huauauaa/array/Chunk.java">source</a>
 *
 * @author Huauauaa
 */
public class Chunk {
    /**
     * @param array : The array to process.
     * @param size  : The length of each chunk.
     * @return the new array of chunks.
     */
    public static int[][] chunk(int[] array, int size) {
        int chunkAmount = (int) Math.ceil((double) array.length / size);
        int[][] result = new int[chunkAmount][];

        for (int i = 0; i < chunkAmount; i++) {
            int start = i * size;
            int length = Math.min(array.length - start, size);

            int[] temp = new int[size];
            System.arraycopy(array, start, temp, 0, length);
            result[i] = temp;
        }
        return result;
    }

    /**
     * default value 1
     */
    public static int[][] chunk(int[] array) {
        return Chunk.chunk(array, 1);
    }
}
