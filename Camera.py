import cv2

class Camera(object):
    """
    class for getting camera image
    """

    def __init__(self, cam_num):
        self.cap = cv2.VideoCapture(cam_num)
        if not self.cap.isOpened():
            raise Exception("Could not get camera try changing camera number")

    def get_image(self):
        # get image as a numpy array
        got_image, frame = self.cap.read()
        if got_image:
            return frame
        else:
            print("Not getting image")

if __name__ == "__main__":
    cam = Camera(1)
    cv2.imshow("im", cam.get_image())
    cv2.waitKey(0)