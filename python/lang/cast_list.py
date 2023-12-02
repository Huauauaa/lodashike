def cast_list(value=None):
    try:
        return list(value)
    except:
        return [value]


def doc():
    return f""" cast to list.
    
    source: http://github.com/Huauauaa/lodashike/blob/main/python/{"/".join(str(__name__).split("."))}.py
    """


cast_list.__doc__ = doc()

if __name__ == "__main__":
    print(cast_list(1))
    print(cast_list({"a": 1}))
    print(cast_list("abc"))
    print(cast_list(None))
    print(cast_list())
    print(cast_list([1, 2]))
    print(cast_list((1,)))
