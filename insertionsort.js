function run_insertionsort(original_array){
    var working_array = copy_array(original_array);
    var frames = [copy_array(working_array)];
    for(var k = 0; k < working_array.length; k++){
        color_index(working_array, k, color_1);
        var kval, kr, kg, kb;
        [kval, kr, kg, jb] = working_array[k];
        var jval, jr, jg, jb;
        for (var j = 0; j < k; j++){
            [jval, jr, jg, jb] = working_array[j];
            color_range(working_array, 0, j, color_3);
            frames.push(copy_array(working_array));
            if (kval < jval){
                frames.pop()
                color_index(working_array, j, color_2);
                for(var m = k; m > j; m--){
                    [working_array[m], working_array[m - 1]] = [working_array[m - 1], working_array[m]];
                    frames.push(copy_array(working_array));
                }
                break;
            }
        }
        color_range(working_array, 0, k, color_2);
        frames.push(copy_array(working_array));
    }
    color_range(working_array, 0, working_array.length - 1, color_5);
    frames.push(copy_array(working_array));
    var legend = [["Insertion Sort Legend", color_5], ["Target element", color_1], ["Items less than or equal to target element", color_3], ["Sorted elements", color_2]];
    return [frames, legend];
}