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

driver = webdriver.Chrome(executable_path=r'C:\Users\Owner\Documents\GitHub\C.H.E.S.S--Game\Selenium\drivers\chromedriver.exe')
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

joingame()
#pawnMovement()
#knightMovement()
bishopMovement()