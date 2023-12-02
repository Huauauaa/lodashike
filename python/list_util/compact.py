def compact(array: list):
    result = list()
    for item in array:
        if item:
            result.append(item)

    return result


def doc():
    return f""" Creates a list with all falsey values removed.
    
    source: http://github.com/Huauauaa/lodashike/blob/main/python/{"/".join(str(__name__).split("."))}.py
    """


compact.__doc__ = doc()

if __name__ == "__main__":
    print(compact([0, 1, False, 2, "", 3]))
