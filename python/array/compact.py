def compact(array: list):
    """
    Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
    :param array: The array to compact.
    :return:
    """
    res = list()
    for item in array:
        if item:
            res.append(item)
    return res


if __name__ == "__main__":
    print(compact([0, 1, False, 2, "", 3]))
