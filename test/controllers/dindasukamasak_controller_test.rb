require 'test_helper'

class DindasukamasakControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get dindasukamasak_index_url
    assert_response :success
  end

end
