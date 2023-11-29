package com.huauauaa.array;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class ChunkTest {

    @BeforeEach
    void setUp() {
    }

    @Test
    void chunk() {
        int[] array = {1, 2, 3};
        int[][] chunk1 = Chunk.chunk(array);
        Assertions.assertEquals(chunk1.length, array.length);
        Assertions.assertEquals(chunk1[1][0], array[1]);
        int[][] chunk2 = Chunk.chunk(array, 2);
        Assertions.assertEquals(chunk2.length, Math.ceil((array.length + 0.5) / 2));
        Assertions.assertEquals(chunk2[1][0], array[2]);
    }
}
