function run_bubblesort(original_array){
    var working_array = copy_array(original_array);
    var frames = [copy_array(working_array)];
    var run = true;
    while(run){
        var swaps = 0;
        for(var k = 1; k < working_array.length; k++){
            var kval, kr, kg, kb;
            [kval, kr, kg, kb] = working_array[k];
            var pval, pr, pg, pb;
            [pval, pr, pg, pb] = working_array[k - 1];
            color_index(working_array, k, color_1);
            color_index(working_array, k - 1, color_3);
            frames.push(copy_array(working_array));
            if(kval < pval){
                [working_array[k], working_array[k - 1]] = [working_array[k - 1], working_array[k]];
                color_index(working_array, k, color_3);
                color_index(working_array, k - 1, color_1);
                frames.push(copy_array(working_array));
                swaps += 1;               
            }
            color_index(working_array, k, color_5);
            color_index(working_array, k - 1, color_5);
        }
        if(swaps == 0){
            run = false;
        }
    }
    color_range(working_array, 0, working_array.length - 1, color_5);
    frames.push(copy_array(working_array)); 
    var legend = [["Bubblesort Legend", color_5], ["Left element", color_3], ["Right element", color_1]];   
    return [frames, legend];
}