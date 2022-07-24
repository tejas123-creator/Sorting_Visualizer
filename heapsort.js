function run_heapsort(original_array){
    var working_array = copy_array(original_array);
    var frames = [copy_array(original_array)];
    var heap_size = 0;
    for(var k = 0; k < original_array.length; k++){
        insert_into_heap();
        frames.push(copy_array(working_array));
    }
    for(var k = working_array.length - 1; k >= 0; k--){
        pop_from_heap();
    }

    function insert_into_heap(){
        var ind = heap_size;
        color_index(working_array, ind, color_1);
        frames.push(copy_array(working_array));            
        color_index(working_array, ind, color_3);        
        var ival, ir, ig, ib;
        [ival, ir, ig, ib] = working_array[ind];
        var parent = Math.floor((ind - 1) / 2);
        var pval, pr, pg, pb;
        if(parent > -1){
            [pval, pr, pg, pb] = working_array[parent];
        }
        while(parent > 0 && ival > pval){
            color_index(working_array, ind, color_1);
            frames.push(copy_array(working_array));            
            color_index(working_array, ind, color_3);
            [working_array[ind], working_array[parent]] = [working_array[parent], working_array[ind]];
            ind = parent;
            parent = Math.floor((ind - 1) / 2);
            [pval, pr, pg, pb] = working_array[parent];
            [ival, ir, ig, ib] = working_array[ind];
        }
        if (ival > pval){
            [working_array[ind], working_array[parent]] = [working_array[parent], working_array[ind]];            
        }
        heap_size += 1;
    }

    function pop_from_heap(){
        [working_array[0], working_array[heap_size - 1]] = [working_array[heap_size - 1], working_array[0]];
        color_index(working_array, heap_size - 1, color_2);
        heap_size -= 1;
        ind = 0;
        [ival, ir, ig, ib] = working_array[ind];
        var child1 = ind * 2 + 1;
        var c1val, c1r, c1g, c1b;
        if (child1 < heap_size){
            [c1val, c1r, c1g, c1b] = working_array[child1];
        }
        var child2 = ind * 2 + 2;
        var c2val, c2r, c2g, c2b;
        if (child2 < heap_size){
            [c2val, c2r, c2g, c2b] = working_array[child2];
        }
        while(child1 < heap_size && child2 < heap_size  && (ival < c1val || ival < c2val)){
            if (c1val > c2val){
                [working_array[child1], working_array[ind]] = [working_array[ind], working_array[child1]];
                ind = child1;
            } else {
                [working_array[child2], working_array[ind]] = [working_array[ind], working_array[child2]];                
                ind = child2;
            }
            child1 = ind * 2 + 1;
            if (child1 < heap_size){
                [c1val, c1r, c1g, c1b] = working_array[child1];
            }            
            child2 = ind * 2 + 2;
            if (child2 < heap_size){
                [c2val, c2r, c2g, c2b] = working_array[child2];
            }
        }
        if (child2 < heap_size && ival < c2val){
            [working_array[child2], working_array[ind]] = [working_array[ind], working_array[child2]];                
        } else if(child1 < heap_size && ival < c1val){
            [working_array[child1], working_array[ind]] = [working_array[ind], working_array[child1]];            
        }
        frames.push(copy_array(working_array));
    }
    color_range(working_array, 0, working_array.length - 1, color_5);
    frames.push(copy_array(working_array));
    var legend = [["Heapsort Legend", color_5], ["In-place max heap", color_3], ["Element being added to max heap", color_1], ["Sorted elements", color_2]]
    return [frames, legend];
}