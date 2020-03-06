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

driver = webdriver.Chrome(executable_path=r'C:\Users\Harsh\Documents\GitHub\C.H.E.S.S--Game\Selenium\drivers\chromedriver.exe')
driver.set_page_load_timeout(10)
actions = ActionChains(driver)

driver.get("http://127.0.0.1:5000/")


def pawnMovement():
    driver.find_element_by_class_name("btn").click()
    driver.find_element_by_id("21").click()
    menu = driver.find_element_by_id("21")
    hidden_submenu = driver.find_element_by_id("31")
    actions.move_to_element(menu)
    actions.click(hidden_submenu)
    actions.perform()
    #actions(driver).move_to_element(menu).click(hidden_submenu).perform()

    #driver.find_element_by_id("31").click()
    driver.find_element_by_id("22").click()
    return

pawnMovement()

