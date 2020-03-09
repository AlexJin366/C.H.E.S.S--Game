from  selenium import webdriver
import Convertor
import sys
from selenium.webdriver.common.action_chains import ActionChains

# sys.path.append(r"C:\Users\Owner\Documents\GitHub\C.H.E.S.S--Game\js")
# print("\nPaths\n")
# print(sys.path)
# print("\n"):
# import Bishop.js as Bishop
# #Board,King,Knight,main,Pawn,Piece,Queen,Rook

driver = webdriver.Chrome(executable_path=r'C:/Users/Harsh/Documents/GitHub/C.H.E.S.S--Game/Selenium/drivers/chromedriver.exe')
driver.set_page_load_timeout(10)


driver.get("http://127.0.0.1:5000/")

def joingame():
    driver.find_element_by_class_name("btn").click()
    return


def pawnMovement():
    print("PawnCheck")
    menu = driver.find_element_by_id("76")
    menu.click()

    #implement wrong moves
    try1 = driver.find_element_by_id("55")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') == None):
        print("passed")
    else:
        print("failed")
    
    try1 = driver.find_element_by_id("65")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') == None):
        print("passed")
    else:
        print("failed")
    
    try1 = driver.find_element_by_id("57")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') == None):
        print("passed")
    else:
        print("failed")
    
    try1 = driver.find_element_by_id("67")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') == None):
        print("passed")
    else:
        print("failed")
    
    #implement Valid moves
    try1 = driver.find_element_by_id("56")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != None):
        print("passed")
    else:
        print("failed")
    
    menu = try1
    menu.click()
    try1 = driver.find_element_by_id("46")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != None):
        print("passed")
    else:
        print("failed")

    return

def knightMovement():
    print("KnightCheck")
    menu = driver.find_element_by_id("87")
    menu.click()

    try1 = driver.find_element_by_id("76")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != "Pieces/White/wN.png"):
        print("passed")
    else:
        print("failed")
    
    try1 = driver.find_element_by_id("77")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != "Pieces/White/wN.png"):
        print("passed")
    else:
        print("failed")

    try1 = driver.find_element_by_id("78")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != "Pieces/White/wN.png"):
        print("passed")
    else:
        print("failed")


    try1 = driver.find_element_by_id("67")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != "Pieces/White/wN.png"):
        print("passed")
    else:
        print("failed")

    #implement Valid moves
    print("passing Case")
    menu = driver.find_element_by_id("87")
    try1 = driver.find_element_by_id("87")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != "Pieces/White/wN.png"):
        #print(try1.get_attribute('src'))
        print("passed")
    else:
        print("failed")
    
    try1 = driver.find_element_by_id("66")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') == "http://127.0.0.1:5000/Pieces/White/wN.png"):
        #print(try1.get_attribute('src'))
        print("passed")
    else:
        print("failed")

    return

def bishopMovement():
    print("BishopCheck")
    menu = driver.find_element_by_id("86")
    menu.click()

    try1 = driver.find_element_by_id("75")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != "http://127.0.0.1:5000/Pieces/White/wB.png"):
        print("passed")
    else:
        print("failed")
    
    try1 = driver.find_element_by_id("76")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != "http://127.0.0.1:5000/Pieces/White/wB.png"):
        print("passed")
    else:
        print("failed")

    try1 = driver.find_element_by_id("77")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != "http://127.0.0.1:5000/Pieces/White/wB.png"):
        print("passed")
    else:
        print("failed")
    
    #implement Valid moves
    print("passing Case")
    try1 = driver.find_element_by_id("57")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()
    
    try1 = driver.find_element_by_id("75")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    
    try1 = driver.find_element_by_id("55")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != "http://127.0.0.1:5000/Pieces/White/wN.png"):
        #print(try1.get_attribute('src'))
        print("passed")
    else:
        print("failed")
    
    #-----------------------------------
    menu = driver.find_element_by_id("86")
    try1 = driver.find_element_by_id("86")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != "Pieces/White/wN.png"):
        #print(try1.get_attribute('src'))
        print("passed")
    else:
        print("failed")
    
    try1 = driver.find_element_by_id("53")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != "http://127.0.0.1:5000/Pieces/White/wN.png"):
        #print(try1.get_attribute('src'))
        print("passed")
    else:
        print("failed")
    
    try1 = driver.find_element_by_id("86")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != "http://127.0.0.1:5000/Pieces/White/wN.png"):
        #print(try1.get_attribute('src'))
        print("passed")
    else:
        print("failed")
    
    try1 = driver.find_element_by_id("68")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != "http://127.0.0.1:5000/Pieces/White/wN.png"):
        #print(try1.get_attribute('src'))
        print("passed")
    else:
        print("failed")
    return

#------------------------
def rookMovement():
    print("Rook Test Cases")

    # pre conditions
    # move rook up
    menu = driver.find_element_by_id("88")
    menu.click()

    try1 = driver.find_element_by_id("78")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != ""):
        print("passed")
    else:
        print("failed")

    # move rook left
    menu = driver.find_element_by_id("88")
    menu.click()

    try1 = driver.find_element_by_id("87")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != ""):
        print("passed")
    else:
        print("failed")

    ## post conditions
    # move pawn
    menu = driver.find_element_by_id("78")
    menu.click()

    try1 = driver.find_element_by_id("58")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    # move up
    menu = driver.find_element_by_id("88")
    menu.click()

    try1 = driver.find_element_by_id("68")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    # move left
    menu = driver.find_element_by_id("68")
    menu.click()

    try1 = driver.find_element_by_id("61")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    # move right
    menu = driver.find_element_by_id("61")
    menu.click()

    try1 = driver.find_element_by_id("65")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    # capture
    menu = driver.find_element_by_id("65")
    menu.click()

    try1 = driver.find_element_by_id("25")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    # escape
    menu = driver.find_element_by_id("25")
    menu.click()

    try1 = driver.find_element_by_id("45")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') == "http://127.0.0.1:5000/Pieces/White/wR.png"):
        print("passed")
        return
    else:
        print("failed")

    
def kingMovement():
    print("King Test Cases")

    # pre conditions
    # move rook up
    menu = driver.find_element_by_id("85")
    menu.click()

    try1 = driver.find_element_by_id("75")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != ""):
        print("passed")
    else:
        print("failed")


    # move rook right diagonally
    menu = driver.find_element_by_id("85")
    menu.click()

    try1 = driver.find_element_by_id("76")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != ""):
        print("passed")
    else:
        print("failed")

    # move left diagonally
    menu = driver.find_element_by_id("85")
    menu.click()

    try1 = driver.find_element_by_id("74")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != ""):
        print("passed")
    else:
        print("failed")


    # move rook left
    menu = driver.find_element_by_id("85")
    menu.click()

    try1 = driver.find_element_by_id("84")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != ""):
        print("passed")
    else:
        print("failed")


    # move rook right
    menu = driver.find_element_by_id("85")
    menu.click()

    try1 = driver.find_element_by_id("86")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != ""):
        print("passed")
    else:
        print("failed")


    # move pawn
    menu = driver.find_element_by_id("75")
    menu.click()

    try1 = driver.find_element_by_id("55")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

     # move rook up
    menu = driver.find_element_by_id("85")
    menu.click()

    try1 = driver.find_element_by_id("75")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

     # move rook up
    menu = driver.find_element_by_id("75")
    menu.click()

    try1 = driver.find_element_by_id("65")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    # move rook right diagonally
    menu = driver.find_element_by_id("65")
    menu.click()

    try1 = driver.find_element_by_id("76")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    # move left diagonally
    menu = driver.find_element_by_id("76")
    menu.click()

    try1 = driver.find_element_by_id("65")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    # move rook left
    menu = driver.find_element_by_id("65")
    menu.click()

    try1 = driver.find_element_by_id("64")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    # move rook right
    menu = driver.find_element_by_id("64")
    menu.click()

    try1 = driver.find_element_by_id("65")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

def queenMovement():
    print("Queen Test Cases")
    # pre conditions
    # move up
    menu = driver.find_element_by_id("84")
    menu.click()

    try1 = driver.find_element_by_id("74")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    # move pawn up
    menu = driver.find_element_by_id("74")
    menu.click()

    try1 = driver.find_element_by_id("64")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    # move queen up 
    menu = driver.find_element_by_id("84")
    menu.click()

    try1 = driver.find_element_by_id("74")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    # move queen up right
    menu = driver.find_element_by_id("74")
    menu.click()

    try1 = driver.find_element_by_id("52")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

def bishopMovement():
    print("Bishop Test Cases")
    menu = driver.find_element_by_id("86")
    menu.click()

    try1 = driver.find_element_by_id("75")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != "http://127.0.0.1:5000/Pieces/White/wB.png"):
        print("passed")
    else:
        print("failed")
    
    try1 = driver.find_element_by_id("76")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != "http://127.0.0.1:5000/Pieces/White/wB.png"):
        print("passed")
    else:
        print("failed")

    try1 = driver.find_element_by_id("77")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != "http://127.0.0.1:5000/Pieces/White/wB.png"):
        print("passed")
    else:
        print("failed")
    
    #implement Valid moves
    print("passing Case")
    try1 = driver.find_element_by_id("57")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()
    
    try1 = driver.find_element_by_id("75")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    
    try1 = driver.find_element_by_id("55")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != "http://127.0.0.1:5000/Pieces/White/wN.png"):
        #print(try1.get_attribute('src'))
        print("passed")
    else:
        print("failed")
    
    #-----------------------------------
    menu = driver.find_element_by_id("86")
    try1 = driver.find_element_by_id("86")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != "Pieces/White/wN.png"):
        print("passed")
    else:
        print("failed")
    
    try1 = driver.find_element_by_id("53")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != "http://127.0.0.1:5000/Pieces/White/wN.png"):
        print("passed")
    else:
        print("failed")
    
    try1 = driver.find_element_by_id("86")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != "http://127.0.0.1:5000/Pieces/White/wN.png"):
        print("passed")
    else:
        print("failed")
    
    try1 = driver.find_element_by_id("68")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    if(try1.get_attribute('src') != "http://127.0.0.1:5000/Pieces/White/wN.png"):
        print("passed")
    else:
        print("failed")
    return


joingame()
pawnMovement()
knightMovement()
rookMovement()
kingMovement()
queenMovement()
bishopMovement()
