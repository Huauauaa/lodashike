def chunk(array: list, size=1):
    result = []
    count = 0
    while count < len(array):
        end_index = count + size
        result.append(array[count:end_index])
        count = end_index

    return result


def doc():
    return f"""
    source: http://github.com/Huauauaa/lodashike/blob/main/python/{"/".join(str(__name__).split("."))}.py
    """


chunk.__doc__ = doc()

if __name__ == "__main__":
    print(chunk(["a", "b", "c", "d"], 2))
    print(chunk(["a", "b", "c", "d"], 3))
