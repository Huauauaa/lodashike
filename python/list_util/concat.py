def concat(array: list, *args):
    result = array[::]
    for item in args:
        if type(item) is type(list()):
            for it in item:
                result.append(it)
        else:
            result.append(item)
    return result


def doc():
    return f"""

    source: http://github.com/Huauauaa/lodashike/blob/main/python/{"/".join(str(__name__).split("."))}.py
    """


concat.__doc__ = doc()

if __name__ == "__main__":
    arr = [1]
    other = concat(arr, 2, [3], [[4]])
    print(other)
    print(arr)
