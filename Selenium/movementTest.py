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
    menu = driver.find_element_by_id("76")
    menu.click()
    hidden_submenu = driver.find_element_by_id("56")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(hidden_submenu)
    actions.perform()
    return



def knightMovement():
    menu = driver.find_element_by_id("87")
    menu.click()
    hidden_submenu = driver.find_element_by_id("66")
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(hidden_submenu)
    actions.perform()
    return

joingame()
pawnMovement()
knightMovement()