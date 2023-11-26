package com.huauauaa;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * array
 */
public class Array {
    /**
     * Creates an array of elements split into groups the length of size. If array
     * can't be split evenly, the final chunk will be the remaining elements.
     * 
     * @param <T>   type of array
     * @param array The array to process
     * @param size  The length of each chunk
     * @return the new array of chunks.
     */
    public <T> T[][] chunk(T[] array, int size) {
        List<T[]> result = new ArrayList<>();
        List<T> item = new ArrayList<>();
        for (int i = 0; i < array.length; i++) {
            item.add(array[i]);
            if (item.size() == size) {
                result.add((T[]) item.toArray());
                item.clear();
            }
        }
        if (item.size() != 0) {
            result.add((T[]) item.toArray());
        }
        return (T[][]) result.toArray();
    }
}
